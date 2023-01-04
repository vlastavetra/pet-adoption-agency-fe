import { FC } from "react"
import PetsCard from "./PetsCard"

interface PetsListProps {
  pets: Array<any>,
}

const PetsList: FC<PetsListProps> = ({pets}) => {
  return (
    <ul className="pet-cards-list">
      {pets && pets.map((pet) => {
        return (
          <PetsCard key={crypto.randomUUID()} {...pet}/>
        )
      })}
    </ul>
  )
}

export default PetsList