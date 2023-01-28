import { FC, useState } from "react"
import axios from "axios"
import "../App.sass"
import Button from "../elements/Button"

interface SignupModalProps {
  showSignupModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupModal: FC<SignupModalProps> = ({ showSignupModal }) => {
  const [userData, setUserData] = useState({ email: "", password: "", repassword: "", firstname: "", lastname: "", phone: "" })
  const [valid, setValid] = useState(true)

  const setData = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}user/signup`, userData)

      if (res.data) {
        showSignupModal!(false)
      }
    } catch (err) {
      console.log(err);
     
    }
  }

  const checkValid = () => {
    if (!userData.email || !userData.password) {
      return setValid(false)
    }
    setValid(true)
    return
  };

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setUserData({ ...userData, [name]: value })
  }

  const onClickHandler = (e?: Event) => {
    e?.preventDefault()
    checkValid()
    if (valid) {setData()}
  };

  return (
    <div className="modal-container" onClick={() => { showSignupModal!(false) }}>
      <div className="modal-wrapper" onClick={e => { e.stopPropagation() }}>
        <svg className="close-icon" onClick={() => showSignupModal!(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
        <form action="POST" className="form">
          <fieldset className="form-fieldset">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={onChangeHandler}
              value={userData.email}
              required
              className={`form-input ${!valid && !userData.email && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="password" className="form-label">Password *</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={onChangeHandler}
              value={userData.password}
              required
              className={`form-input ${!valid && !userData.password && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="repassword" className="form-label">Password check *</label>
            <input
              id="repassword"
              name="repassword"
              type="password"
              onChange={onChangeHandler}
              value={userData.repassword}
              required
              className={`form-input ${!valid && !userData.repassword && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="firstname" className="form-label">First name *</label>
            <input
              id="firstname"
              name="firstname"
              type="text"
              onChange={onChangeHandler}
              value={userData.firstname}
              required
              className={`form-input ${!valid && !userData.firstname && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="lastname" className="form-label">Last name *</label>
            <input
              id="lastname"
              name="lastname"
              type="text"
              onChange={onChangeHandler}
              value={userData.lastname}
              required
              className={`form-input ${!valid && !userData.lastname && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <fieldset className="form-fieldset">
            <label htmlFor="phone" className="form-label">Phone number *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              onChange={onChangeHandler}
              value={userData.phone}
              required
              className={`form-input ${!valid && !userData.phone && "form-input-error"}`}
            >
            </input>
          </fieldset>
          <div className="form-button-group">
            <Button
              text="Sign Up"
              onClickHandler={onClickHandler!}
              //className={`${!valid && "disabled"}`}
            />
            <Button
              text="Cancel"
              style="outline"
              onClickHandler={() => showSignupModal!(false)}
            />
          </div>
        </form>
        {!valid &&
        <div className="form-error-message-container">
          <span className="form-error-message-text">Required provide all values</span>
        </div>
        }
      </div>
    </div>
  );
}

export default SignupModal;