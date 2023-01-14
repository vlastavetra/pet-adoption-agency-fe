import { FC, useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import FormContainer from "../elements/FormContainer"
import FromFieldset from "../elements/FormFieldset"
import FormLabel from "../elements/FormLabel"
import FormInput from "../elements/FormInput"
import Button from "../elements/Button"
import "./PetEditorForm.sass"

interface PetEditorFormProps {
  isEdit?: boolean
  _id?: string
  name?: string
  type?: string
  adoptionStatus?: string
  breed?: string
  color?: string
  height?: string
  weight?: string
  hypoallergnic?: boolean
  bio?: string
  dietery?: string
  picture?: string
  showModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const PetEditorForm: FC<PetEditorFormProps> = ({
  isEdit, _id, type, name, adoptionStatus, picture, breed, height, weight, color, bio, hypoallergnic, dietery, showModal
}) => {
  const { token } = useContext(AuthContext)
  const [petData, setPetData] = useState({
    type: type ? type : "Cat",
    name: name ? name : "",
    adoptionStatus: adoptionStatus ? adoptionStatus : "Adopted",
    picture: picture ? picture : "",
    height: height ? height : "",
    weight: weight ? weight : "",
    color: color ? color : "",
    bio: bio ? bio : "",
    hypoallergenic: hypoallergnic ? "true" : "false",
    dietery: dietery? dietery : "",
    breed: breed ? breed : ""
  })

  const onChangeHandler = (e?: { target: { value?: any; name?: any; files?: any } } | undefined) => {
    const { name, value, files } = e!.target
    files ? setPetData({ ...petData, "picture": files[0] }) : setPetData({ ...petData, [name]: value })
  }

  const onClickHandlerCreate = async (e?: Event) => {
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
        hypoallergenic: "",
        dietery: "",
        breed: ""
      })
      if (res.data) {}
    } catch (err) {
      console.log(err)
    }
  }

  const onClickHandlerEdit= async (e?: Event) => {
    e?.preventDefault()

    try {
      const res = await axios.patch(`http://127.0.0.1:4000/pet/${_id}`, petData, { headers: { authorization: `Bearer ${token}` } })
      if (res.data === "Updated") {showModal!(false)}
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <FormContainer>
      <FromFieldset>
        <FormLabel htmlFor="type" text="Type" />
        <select className="form-input" id="type" name="type" onChange={onChangeHandler} value={petData.type} required>
          <option value="Cat">Cat</option>
          <option value="Dog">Dog</option>
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
        <select className="form-input" id="adoptionStatus" name="adoptionStatus" onChange={onChangeHandler} value={petData.adoptionStatus} required>
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
          rows={2}
          onChange={onChangeHandler}
          value={petData.bio}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="dietery" text="Dietery" />
        <textarea
          className="form-input"
          name="dietery"
          id="dietery"
          rows={2}
          value={petData.dietery}
          onChange={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="hypoallergenic" text="Hypoallergenic" />
        <select className="form-input" id="hypoallergenic" name="hypoallergenic" onChange={onChangeHandler} value={petData.hypoallergenic}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
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
        <FormLabel htmlFor="picture" text="Picture" />
        <input name="picture" id="picture" className="form-input" type='file' accept='img/*' onChange={onChangeHandler} />
      </FromFieldset>
      <FromFieldset>
        <Button
          text={isEdit ? "Edit pet" : "Create pet"}
          className="pet-editor-button"
          onClickHandler={isEdit ? onClickHandlerEdit! : onClickHandlerCreate}
        />
      </FromFieldset>
    </FormContainer>
  )
}

export default PetEditorForm