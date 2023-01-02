import './App.css'
import {useState} from "react"
import {Routes, Route} from "react-router-dom"
import {AuthContext} from "./context/AuthContext"
import Home from './pages/Home'
import Profile from './pages/Profile'
import MyPets from './pages/MyPets'
import Pet from './pages/Pet'
import Search from './pages/Search'
import AddPet from './pages/AddPet'
import Dashboard from './pages/Dashboard'
import Header from "./components/Header"
import LoginModal from "./components/LoginModal"
import SignupModal from "./components/SignupModal"

function App() {
  const [loginModal, showLoginModal] = useState(false)
  const [signupModal, showSignupModal] = useState(false)
  const [user, setUser] = useState(localStorage.getItem("")!) || false
  const [token, setToken] = useState(localStorage.getItem("")!) || false

  return (
    <AuthContext.Provider value={{user, token}}>
      <div className="body-container">
        <Header
          showLoginModal={showLoginModal}
          showSignupModal={showSignupModal}
          setUser={setUser}
        />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/my-pets" element={<MyPets/>}/>
          <Route path="/pet/:id" element={<Pet/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/add-pet" element={<AddPet/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        {loginModal && <LoginModal showLoginModal={showLoginModal} setUser={setUser} setToken={setToken}/>}
        {signupModal && <SignupModal showSignupModal={showSignupModal}/>}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
