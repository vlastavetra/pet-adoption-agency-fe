import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyPets from './pages/MyPets';
import Pet from './pages/Pet';
import Search from './pages/Search';
import AddPet from './pages/AddPet';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="body-container">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profile" element={<MyPets/>}/>
        <Route path="/profile" element={<Pet/>}/>
        <Route path="/profile" element={<Search/>}/>
        <Route path="/profile" element={<AddPet/>}/>
        <Route path="/profile" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
