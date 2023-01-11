import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import "../App.sass";
import PetsList from "../components/PetsList";

function MyPets() {
  const { token } = useContext(AuthContext)
  const [pets, setPets] = useState<any[]>([])

  const getUsersPets = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/user/pets", { headers: { authorization: `Bearer ${token}` } })
      setPets(res.data)
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
        <PetsList pets={pets && pets.filter(obj => obj.list === "adopted")} />
      </section>
      <section className="section-container">
        <h2 className="title-h2">Saved</h2>
        <PetsList pets={pets && pets.filter(obj => obj.list === "saved")} />
      </section>
    </main>
  );
}

export default MyPets;