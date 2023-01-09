import { FC, useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import FormContainer from "../elements/FormContainer"
import FromFieldset from "../elements/FromFieldset"
import FormLabel from "../elements/FormLabel"
import FormInput from "../elements/FormInput"
import Button from "../elements/Button"
import "./PetEditorForm.sass"

interface PetEditorFormProps {
  isEdit?: boolean
  petName?: string
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
}

const PetEditorForm: FC<PetEditorFormProps> = ({ isEdit, type, petName, adoptionStatus, picture, breed, height, weight, color, bio, hypoallergnic, dietery }) => {
  const { token } = useContext(AuthContext)
  const [petData, setPetData] = useState({
    type: type ? type : "",
    name: petName? petName: "",
    adoptionStatus: "",
    picture: picture ? picture : "",
    height: height ? height : "",
    weight: weight ? weight : "",
    color: color ? color: "",
    bio: bio ? bio :"",
    hypoallergenic: hypoallergnic ? hypoallergnic : false,
    dietery: "",
    breed: breed ? breed : ""
  })

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setPetData({ ...petData, [name]: value })
  }

  const onClickHandler = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:4000/pet", petData, { headers: { authorization: `Bearer ${token}` } })
      setPetData({
        type: "",
        name: "",
        adoptionStatus: "",
        picture: "",
        height: "",
        weight: "",
        color: "",
        bio: "",
        hypoallergenic: false,
        dietery: "",
        breed: ""
      })
      if (res.data) {
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormContainer>
      <FromFieldset>
        <FormLabel htmlFor="type" text="Type" />
        <select className="form-input" id="type" name="type" onChange={onChangeHandler} value={petData.type}>
          <option value="Cat">Cats</option>
          <option value="Dog">Dogs</option>
          <option value="Other">Other</option>
        </select>
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="name" text="Name" />
        <FormInput
          type="text"
          name="name"
          id="name"
          value={petData.name}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="adoptionStatus" text="Adoption Status" />
        <select className="form-input" id="adoptionStatus" name="adoptionStatus" onChange={onChangeHandler} value={petData.adoptionStatus}>
          <option value="Adopted">Adopted</option>
          <option value="Fostered">Fostered</option>
          <option value="Available">Available</option>
        </select>
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="height" text="Height" />
        <FormInput
          type="number"
          name="height"
          id="height"
          value={petData.height}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="weight" text="Weight" />
        <FormInput
          type="number"
          name="weight"
          id="weight"
          value={petData.weight}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="color" text="Color" />
        <FormInput
          type="text"
          name="color"
          id="color"
          value={petData.color}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="bio" text="Bio" />
        <textarea
          className="form-input"
          id="bio"
          name="bio"
          rows={3}
          onChange={onChangeHandler}
          value={petData.bio}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="dietery" text="Dietery" />
        <FormInput
          type="text"
          name="dietery"
          id="dietery"
          value={petData.dietery}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="breed" text="Breed" />
        <FormInput
          type="text"
          name="breed"
          id="breed"
          value={petData.breed}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <Button
          text={isEdit ? "Edit pet" : "Create pet"}
          className="pet-editor-button"
          onClickHandler={onClickHandler!}
        />
      </FromFieldset>
    </FormContainer>
  )
}

export default PetEditorForm