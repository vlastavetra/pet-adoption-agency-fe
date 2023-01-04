import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "../App.css"

function Pet() {
  const [pet, setPet] = useState<{
    name?: string;
    type?: string;
    adoptionStatus?: string;
    breed?: string;
    color?: string;
    height?: string;
    weight?: string;
    hypoallergnic?: string;
    bio?: string;
    dietery?: Array<String>;
    picture?: string;
  }>({}) || null

  const {id: petId} = useParams()

  const getPet = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:4000/pet/${petId}`)
      setPet(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getPet()
  }, [])

  return (
    <main className="main-container">
      <h1 className="title-h1 pet-info-title">Hi i'm {pet.name} the {pet.type}</h1>
      <section className="welcome-section pet-info-container">
        <div className="pet-info-container-left">
          <div className="pet-info-table">
            <div className="pet-info-row">
              <span>My adoption status</span>
              <span>{pet.adoptionStatus}</span>
            </div>
            <div className="pet-info-row">
              <span>My breed</span>
              <span>{pet.breed}</span>
            </div>
            <div className="pet-info-row">
              <span>My color</span>
              <span>{pet.color}</span>
            </div>
            <div className="pet-info-row">
              <span>My height</span>
              <span>{pet.height}</span>
            </div>
            <div className="pet-info-row">
              <span>My weight</span>
              <span>{pet.weight}</span>
            </div>
            {pet.dietery &&
              <div className="pet-info-row">
                <span>I prefer to eat</span>
                <ul className="pet-info-list">
                  {
                    pet.dietery.map((pet) => {
                      return (
                        <li key={crypto.randomUUID()}>{pet}</li>
                      )
                    })
                  }
                </ul>
              </div>
            }
            {pet.hypoallergnic &&
              <div className="pet-info-row">
                <span>Also i'm hypoallergnic!</span>
              </div>
            }
          </div>
          {
            pet.bio &&
            <div className="pet-info-bio">
              <span className="pet-info-bio-title">My bio</span>
              <p>{pet.bio}</p>
            </div>
          }
        </div>
        <div className="pet-info-container-right">
          <img className="pet-info-img" src={pet.picture} alt={`${pet.type} ${pet.breed} ${pet.name}`} />
        </div>
      </section>
    </main>
  );
}

export default Pet;