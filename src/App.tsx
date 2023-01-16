import "./App.sass"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { AuthContext } from "./context/AuthContext"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import MyPets from "./pages/MyPets"
import Pet from "./pages/Pet"
import Search from "./pages/Search"
import AddPet from "./pages/AddPet"
import Dashboard from "./pages/Dashboard"
import User from "./pages/User"
import PrivateRoute from "./pages/PrivateRoute"
import PrivateAdminRoute from "./pages/PrivateAdminRoute"
import Header from "./components/Header"
import LoginModal from "./components/LoginModal"
import SignupModal from "./components/SignupModal"

function App() {
  const [loginModal, showLoginModal] = useState(false)
  const [signupModal, showSignupModal] = useState(false)
  const [user, setUser] = useState(localStorage.getItem("user")!) || false
  const [token, setToken] = useState(localStorage.getItem("token")!) || false
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin")!) || false

  return (
    <AuthContext.Provider value={{ user, setUser, token, setToken, isAdmin, setIsAdmin }}>
      <Header
        showLoginModal={showLoginModal}
        showSignupModal={showSignupModal}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<PrivateRoute currentUser={user}><Profile /></PrivateRoute>} />
        <Route path="/my-pets" element={<PrivateRoute currentUser={user}><MyPets /></PrivateRoute>} />
        <Route path="/pet/:id" element={<PrivateRoute currentUser={user}><Pet /></PrivateRoute>} />
        <Route path="/add-pet" element={<PrivateAdminRoute isAdmin={isAdmin}><AddPet /></PrivateAdminRoute>} />
        <Route path="/dashboard" element={<PrivateAdminRoute isAdmin={isAdmin}><Dashboard /></PrivateAdminRoute>} />
        <Route path="/user/:id" element={<PrivateAdminRoute isAdmin={isAdmin}><User /></PrivateAdminRoute>} />
      </Routes>
      {loginModal && <LoginModal showLoginModal={showLoginModal} />}
      {signupModal && <SignupModal showSignupModal={showSignupModal} />}
    </AuthContext.Provider>
  );
}

export default App;
