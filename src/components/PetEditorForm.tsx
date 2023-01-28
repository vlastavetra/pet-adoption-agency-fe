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
  hypoallergenic?: boolean
  bio?: string
  dietery?: string
  picture?: string
  showModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const PetEditorForm: FC<PetEditorFormProps> = ({
  isEdit, _id, type, name, adoptionStatus, picture, breed, height, weight, color, bio, hypoallergenic, dietery, showModal
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
    hypoallergenic: hypoallergenic ? "true" : "false",
    dietery: dietery ? dietery : "",
    breed: breed ? breed : ""
  })
  const [valid, setValid] = useState(true)

  const onChangeHandler = (e?: { target: { value?: any; name?: any; files?: any; } } | undefined) => {
    const { name, value, files } = e!.target
    files ? setPetData({ ...petData, "picture": files[0] }) : setPetData({ ...petData, [name]: value })
  }

  const resetForm = () => {
    setValid(true)
    petData.type = "Cat"
    petData.name = ""
    petData.adoptionStatus = ""
    petData.picture = ""
    petData.height = ""
    petData.weight = ""
    petData.color = ""
    petData.bio = ""
    petData.hypoallergenic = ""
    petData.dietery = ""
    petData.breed = ""
  }

  const checkValid = () => {
    if (!type || !name || !adoptionStatus || !picture || !height || !weight || !color || !breed) {
      return setValid(false)
    }
    setValid(true)
    return
  };

  const onClickHandlerCreate = async (e?: Event) => {
    e?.preventDefault()
    checkValid()
    if (valid) {
      try {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}pet`, petData, { headers: { authorization: `Bearer ${token}`, enctype: "multipart/form-data", 'Content-Type': 'multipart/form-data' } })
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
        if (res.data) {resetForm() }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const onClickHandlerEdit = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.patch(`${process.env.REACT_APP_SERVER_URL}pet/${_id}`, petData, { headers: { authorization: `Bearer ${token}`, enctype: "multipart/form-data", 'Content-Type': 'multipart/form-data' } })
      if (res.data === "Updated") { showModal!(false) }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <FormContainer>
        <FromFieldset>
          <FormLabel htmlFor="type" text="Type" required={true} />
          <select id="type" name="type" onChange={onChangeHandler} value={petData.type} required className={`form-input ${!valid && !petData.type && "form-input-error"}`}>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Other">Other</option>
          </select>
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="name" text="Name" required={true}/>
          <FormInput
            type="text"
            name="name"
            id="name"
            value={petData.name}
            onChangeHandler={onChangeHandler}
            required={true}
            className={`${!valid && !petData.name && "form-input-error"}`}
          />
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="adoptionStatus" text="Adoption Status" required={true}/>
          <select id="adoptionStatus" name="adoptionStatus" onChange={onChangeHandler} value={petData.adoptionStatus} className={`form-input ${!valid && !petData.adoptionStatus && "form-input-error"}`}>
            <option value="Adopted">Adopted</option>
            <option value="Fostered">Fostered</option>
            <option value="Available">Available</option>
          </select>
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="height" text="Height" required={true}/>
          <FormInput
            type="number"
            name="height"
            id="height"
            value={petData.height}
            onChangeHandler={onChangeHandler}
            required={true}
            className={`${!valid && !petData.height && "form-input-error"}`}
          />
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="weight" text="Weight" required={true}/>
          <FormInput
            type="number"
            name="weight"
            id="weight"
            value={petData.weight}
            onChangeHandler={onChangeHandler}
            required={true}
            className={`${!valid && !petData.weight && "form-input-error"}`}
          />
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="color" text="Color" required={true}/>
          <FormInput
            type="text"
            name="color"
            id="color"
            value={petData.color}
            onChangeHandler={onChangeHandler}
            required={true}
            className={`${!valid && !petData.color && "form-input-error"}`}
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
          <select className="form-input" id="hypoallergenic" name="hypoallergenic" onChange={onChangeHandler} value={petData.hypoallergenic} required>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="breed" text="Breed" required={true}/>
          <FormInput
            type="text"
            name="breed"
            id="breed"
            value={petData.breed}
            onChangeHandler={onChangeHandler}
            className={`${!valid && !petData.breed && "form-input-error"}`}
          />
        </FromFieldset>
        <FromFieldset>
          <FormLabel htmlFor="picture" text="Picture" required={true}/>
          <input name="picture" id="picture" type='file' accept='img/*' onChange={onChangeHandler} required={true} className={`form-input ${!valid && !petData.picture && "form-input-error"}`}/>
        </FromFieldset>
        <FromFieldset>
          <Button
            text={isEdit ? "Edit pet" : "Create pet"}
            className="pet-editor-button"
            onClickHandler={isEdit ? onClickHandlerEdit! : onClickHandlerCreate}
          />
        </FromFieldset>
      </FormContainer>
      {!valid &&
        <div className="form-error-message-container">
          <span className="form-error-message-text">Required provide all values</span>
        </div>
      }
    </>
  )
}

export default PetEditorForm