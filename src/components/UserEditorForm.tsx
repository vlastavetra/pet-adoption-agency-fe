import { FC, useState, useContext } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import FormContainer from "../elements/FormContainer"
import FromFieldset from "../elements/FormFieldset"
import FormLabel from "../elements/FormLabel"
import FormInput from "../elements/FormInput"
import Button from "../elements/Button"
import "./UserEditorForm.sass"

interface UserEditorFormProps {
  email?: string
  phone?: string
  isEdit?: boolean
  lastname?: string
  firstname?: string
  showSignupModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const UserEditorForm: FC<UserEditorFormProps> = ({ email, firstname, lastname, phone, isEdit, showSignupModal }) => {
  const { token } = useContext(AuthContext)
  const [userData, setUserData] = useState({ 
    email: email ? email : "", 
    password: "", 
    repassword: "", 
    firstname: firstname ? firstname : "", 
    lastname: lastname ? lastname : "", 
    phone: phone ? phone : "" 
  })

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setUserData({ ...userData, [name]: value })
  }

  const onClickHandlerCreate = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:4000/signup", userData)

      if (res.data) {
        showSignupModal!(false)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const userId = localStorage.getItem("userId")

  const getUpdates = () => {
    const obj: { email?: string, phone?: string, lastname?: string, firstname?: string, password?: string, repassword?: string } = Object.assign({}, userData)

    userData.email === email &&  delete obj["email"]
    userData.firstname === firstname &&  delete obj["firstname"]
    userData.lastname === lastname &&  delete obj["lastname"]
    userData.phone === phone &&  delete obj["phone"]
    userData.password.length === 0 &&  delete obj["password"]
    userData.repassword.length === 0 &&  delete obj["repassword"]

    return obj
  }

  const onClickHandlerEdit = async (e?: Event) => {
    const data = getUpdates()
    e?.preventDefault()
    try {
      const res = await axios.patch(`http://127.0.0.1:4000/user/${userId}`, data, { headers: { authorization: `Bearer ${token}` } })
      if (res.data) {console.log(res.data)}
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FormContainer>
      <FromFieldset>
        <FormLabel htmlFor="email" text="Email" />
        <FormInput
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="password" text="Password" />
        <FormInput
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="repassword" text="Password check" />
        <FormInput
          type="password"
          name="repassword"
          id="repassword"
          value={userData.repassword}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="firstname" text="First name" />
        <FormInput
          type="text"
          name="firstname"
          id="firstname"
          value={userData.firstname}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="lastname" text="Last name" />
        <FormInput
          type="text"
          name="lastname"
          id="lastname"
          value={userData.lastname}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <FromFieldset>
        <FormLabel htmlFor="phone" text="Phone number" />
        <FormInput
          type="tel"
          name="phone"
          id="phone"
          value={userData.phone}
          onChangeHandler={onChangeHandler}
        />
      </FromFieldset>
      <Button
        text="Edit my information"
        className="user-editor-button"
        onClickHandler={isEdit ? onClickHandlerEdit! : onClickHandlerCreate!}
      />
    </FormContainer>
  );
}

export default UserEditorForm