import { FC } from "react"
import { Link } from "react-router-dom"

interface PetsCardProps {
  id: string
  name: string
  type: string
  adoptionStatus: boolean
  breed: string
  hypoallergnic: boolean
  picture: string
}

const PetsCard: FC<PetsCardProps> = ({ id, type, hypoallergnic, adoptionStatus, name, breed, picture }) => {
  return (
    <li className="pet-cards-item">
      <Link
        to={`/pet/${id}`}
        className="pet-cards-link"
      >
        <div className="pet-card-container-h">
          {type === "Cat" ?
            <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M288 192h17.1c22.1 38.3 63.5 64 110.9 64c11 0 21.8-1.4 32-4v4 32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V339.2L248 448h56c17.7 0 32 14.3 32 32s-14.3 32-32 32H160c-53 0-96-43-96-96V192.5c0-16.1-12-29.8-28-31.8l-7.9-1C10.5 157.6-1.9 141.6 .2 124s18.2-30 35.7-27.8l7.9 1c48 6 84.1 46.8 84.1 95.3v85.3c34.4-51.7 93.2-85.8 160-85.8zm160 26.5v0c-10 3.5-20.8 5.5-32 5.5c-28.4 0-54-12.4-71.6-32h0c-3.7-4.1-7-8.5-9.9-13.2C325.3 164 320 146.6 320 128v0V32 12 10.7C320 4.8 324.7 .1 330.6 0h.2c3.3 0 6.4 1.6 8.4 4.2l0 .1L352 21.3l27.2 36.3L384 64h64l4.8-6.4L480 21.3 492.8 4.3l0-.1c2-2.6 5.1-4.2 8.4-4.2h.2C507.3 .1 512 4.8 512 10.7V12 32v96c0 17.3-4.6 33.6-12.6 47.6c-11.3 19.8-29.6 35.2-51.4 42.9zM400 128c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16zm48 16c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z" />
            </svg> :
            type === "Dog" ?
              <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M309.6 158.5L332.7 19.8C334.6 8.4 344.5 0 356.1 0c7.5 0 14.5 3.5 19 9.5L392 32h52.1c12.7 0 24.9 5.1 33.9 14.1L496 64h56c13.3 0 24 10.7 24 24v24c0 44.2-35.8 80-80 80H464 448 426.7l-5.1 30.5-112-64zM416 256.1L416 480c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V364.8c-24 12.3-51.2 19.2-80 19.2s-56-6.9-80-19.2V480c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V249.8c-28.8-10.9-51.4-35.3-59.2-66.5L1 167.8c-4.3-17.1 6.1-34.5 23.3-38.8s34.5 6.1 38.8 23.3l3.9 15.5C70.5 182 83.3 192 98 192h30 16H303.8L416 256.1zM464 80c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z" />
              </svg> :
              <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
              </svg>
          }
          {hypoallergnic &&
            <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256c13.3 0 24-10.7 24-24s-10.7-24-24-24s-24 10.7-24 24s10.7 24 24 24zm72 32c0-8.8-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16s16-7.2 16-16z" />
            </svg>
          }
          {adoptionStatus ?
            <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg> :
            <svg className="pet-card-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z" />
            </svg>
          }
        </div>
        <div className="pet-card-container-v">
          <span className="pet-card-text text-medium">{name}</span>
          <span className="pet-card-text">{breed}</span>
        </div>
        <img className="pet-card-img" src={picture} alt={`${type} ${breed} ${name}`} />
      </Link>
    </li>
  )
}

export default PetsCard