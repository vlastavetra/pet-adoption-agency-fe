import { FC, useState } from "react"
import axios from "axios"
import "../App.sass"
import Button from "../elements/Button"

interface SignupModalProps {
  showSignupModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupModal: FC<SignupModalProps> = ({ showSignupModal }) => {
  const [userData, setUserData] = useState({ email: "", password: "", repassword: "", firstname: "", lastname: "", phone: "" })

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setUserData({ ...userData, [name]: value })
  }

  const onClickHandler = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:4000/signup", userData)

      if (res.data) {
        showSignupModal!(false)
      }
    } catch (err) {
      console.log(err);
    }
  };

  // add errors and succsess outputs

  return (
    <div className="modal-container" onClick={() => { showSignupModal!(false) }}>
      <div className="modal-wrapper" onClick={e => { e.stopPropagation() }}>
        <svg className="close-icon" onClick={() => showSignupModal!(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
        <form action="POST" className="form">
          <fieldset className="form-fieldset">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              onChange={onChangeHandler}
              value={userData.email}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              className="form-input"
              id="password"
              name="password"
              type="password"
              onChange={onChangeHandler}
              value={userData.password}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="repassword" className="form-label">Password check</label>
            <input
              className="form-input"
              id="repassword"
              name="repassword"
              type="password"
              onChange={onChangeHandler}
              value={userData.repassword}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="firstname" className="form-label">First name</label>
            <input
              className="form-input"
              id="firstname"
              name="firstname"
              type="text"
              onChange={onChangeHandler}
              value={userData.firstname}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="lastname" className="form-label">Last name</label>
            <input
              className="form-input"
              id="lastname"
              name="lastname"
              type="text"
              onChange={onChangeHandler}
              value={userData.lastname}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="phone" className="form-label">Phone number</label>
            <input
              className="form-input"
              id="phone"
              name="phone"
              type="tel"
              onChange={onChangeHandler}
              value={userData.phone}
            >
            </input>
          </fieldset>
          <div className="form-button-group">
            <Button
              text="Sign Up"
              onClickHandler={onClickHandler!}
            />
            <Button
              text="Cancel"
              style="outline"
              onClickHandler={() => showSignupModal!(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;