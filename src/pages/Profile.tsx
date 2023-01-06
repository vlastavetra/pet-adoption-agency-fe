import {useState, useEffect, useContext} from "react"
import axios from "axios"
import {AuthContext} from "../context/AuthContext"
import "../App.sass";

function Profile() {
  const [userData, setUserData] = useState<{}>({}) || null
  const {user} = useContext(AuthContext)
  const userId = localStorage.getItem("userId")

  const getUserData = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:4000/user/${userId}`)
      setUserData(res.data)
      console.log(userData)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <main className="main-container">
      <section className="section-container">
        <h1 className="title-h1">Hi {user}!</h1>
        <p className="text-medium">You can change your information here</p>
      </section>
      <form action="">
        
      </form>
    </main>
  );
}

export default Profile;