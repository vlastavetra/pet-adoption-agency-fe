import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import PetsList from "../components/PetsList"
import Loader from "../components/Loader"
import "./User.sass"

function User() {
  const [userData, setUserData] = useState<{
    email?: string
    firstname?: string
    lastname?: string
    phone?: string
    isAdmin?: boolean
  }>({}) || null
  const [userPets, setUserPets] = useState<{
    ownedPets?: Array<any>
    savedPets?: Array<any>
  }>({}) || null
  const [loader, showLoader] = useState(false)

  const { token } = useContext(AuthContext)
  const { id: userId } = useParams()

  const getUserData = async () => {
    try {
      showLoader(true)
      const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}user/${userId}/full`, { headers: { authorization: `Bearer ${token}` } })
      if (res.data) {
        setUserData(res.data._doc)
        setUserPets(res.data)
        showLoader(false)
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
      {loader && <Loader />}
      {!loader &&
        <>
          <h1 className="title-h1">{userData.isAdmin ? "Admin:" : "User:"} {userData.firstname} {userData.lastname} </h1>
          <div className="user-contact-container">
            <a className="user-contact-link" href={`mailto: ${userData.email}`}>Email: {userData.email}</a>
            <a className="user-contact-link" href={`tel:+${userData.email}`}>Phone: {userData.phone}</a>
          </div>
          <section className="section-container">
            <h2 className="title-h2">Adopted</h2>
            <PetsList pets={userPets.ownedPets} />
          </section>
          <section className="section-container">
            <h2 className="title-h2">Saved</h2>
            <PetsList pets={userPets.savedPets} />
          </section>
        </>
      }
    </main>
  );
}

export default User;