import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import "../App.sass";
import PetsList from "../components/PetsList";

function MyPets() {
  const { token } = useContext(AuthContext)
   
  const [ownedPets, setOwnedPets] = useState<[]>([])
  const [savedPets, setSavedPets] = useState<[]>([])

  const getUsersPets = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/user/pets", { headers: { authorization: `Bearer ${token}` } })
      setOwnedPets(res.data.ownedPets)
      setSavedPets(res.data.savedPets)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsersPets()
  }, [])

  return (
    <main className="main-container">
      <h1 className="title-h1">My pets</h1>
      <section className="section-container">
        <h2 className="title-h2">Adopted</h2>
        <PetsList pets={ownedPets} />
      </section>
      <section className="section-container">
        <h2 className="title-h2">Saved</h2>
        <PetsList pets={savedPets} />
      </section>
    </main>
  );
}

export default MyPets;