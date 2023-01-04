import {useContext, useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"
import axios from "axios"
import "../App.css"

function Pet() {
  const [pet, setPet] = useState<{
    name?: string
    type?: string
    adoptionStatus?: boolean
    breed?: string
    color?: string
    height?: string
    weight?: string
    hypoallergnic?: boolean
    bio?: string
    dietery?: Array<String>
    picture?: string
    adoptedByUser?: string
    savedByUsers?: Array<String>   
  }>({}) || null

  const {token} = useContext(AuthContext)

  const { id: petId } = useParams()

  const getPet = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:4000/pet/${petId}`, {headers: {authorization: `Bearer ${token}`}})
      setPet(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  const updatePetStatus  = async (action: string) => {
    try {
      const res = await axios.patch(`http://127.0.0.1:4000/pet/${petId}/${action}`, {}, {headers: {authorization: `Bearer ${token}`}})
      setPet(res.data)
    } catch (err) {
      console.log(err);
    }
  }

  const onClickHandler = (action: string) => {
    updatePetStatus(action)
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
              <span>{pet.adoptionStatus ? "Adopted" : "Fostered"}</span>
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
          <div className="pet-info-button-container">
            {pet.adoptedByUser ?
              <button className="button button-header" onClick={() => { onClickHandler!("return") }}>
                <span>Return</span>
              </button> :
              !pet.adoptionStatus ?
              <button className="button button-header" onClick={() => { onClickHandler!("adopt") }}>
                <span>Adopt</span>
              </button> :
              null
            }
            {pet.savedByUsers?.length ?
              <button className="button button-header" onClick={() => { onClickHandler!("unsave") }}>
                <span>Unsave</span>
              </button> :
              <button className="button button-header" onClick={() => { onClickHandler!("save") }}>
                <span>Save</span>
              </button>
            }
          </div>
        </div>
        <div className="pet-info-container-right">
          <img className="pet-info-img" src={pet.picture} alt={`${pet.type} ${pet.breed} ${pet.name}`} />
        </div>
      </section>
    </main>
  );
}

export default Pet;