import { useState, useEffect, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import "../App.sass";
import UserEditorForm from "../components/UserEditorForm";

function Profile() {
  const [userData, setUserData] = useState<{
    email?: string
    firstname?: string
    lastname?: string
    phone?: string
  }>({}) || null
  const [isLoaded, setisLoaded] = useState(false)
  const { token } = useContext(AuthContext)
  const userId = localStorage.getItem("userId")

  const getUserData = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:4000/user/${userId}`, { headers: { authorization: `Bearer ${token}` } })
      if (res.data) {
        setUserData(res.data)
        setisLoaded(true)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <main className="main-container">
      <section className="section-container">
        <h1 className="title-h1">Hi {userData.firstname} {userData.lastname}!</h1>
        <div className="add-pet-container">
          {isLoaded && <UserEditorForm isEdit={true} {...userData} />}
        </div>
      </section>
    </main>
  );
}

export default Profile;