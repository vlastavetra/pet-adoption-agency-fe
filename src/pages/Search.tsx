import {useState, useEffect} from "react"
import axios from "axios"
import "../App.sass"
import PetsList from "../components/PetsList"

function Search() {
  const [pets, setPets] = useState<any[]>([])

  const getAllPets = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:4000/pets")
      setPets(res.data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllPets()
  }, [])

  return (
    <main className="main-container">
      <h1 className="title-h1">Search</h1>
      <section className="section-container">
        <PetsList pets={pets}/>
      </section>
    </main>
  );
}

export default Search;