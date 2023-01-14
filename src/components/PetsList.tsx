import { FC } from "react"
import PetsCard from "./PetsCard"
import "./PetsList.sass"

interface PetsListProps {
  pets: Array<any>
}

const PetsList: FC<PetsListProps> = ({pets}) => {
  return (
    <ul className="pet-cards-list">
      {pets && pets.map((pet) => {
        return (
          <PetsCard key={pet._id} {...pet}/>
        )
      })}
    </ul>
  )
}

export default PetsList