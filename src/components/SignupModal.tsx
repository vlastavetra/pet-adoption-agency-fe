import {FC} from "react"
import {useState} from "react"
import axios from "axios"
import "../App.css";

interface SignupModalProps {
  showSignupModal?: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupModal: FC<SignupModalProps> = ({showSignupModal}) => {
  const [userData, setUserData] = useState({email:"", password:"", repassword:"", firstname: "", lastname:"", phone:""})

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const {name, value} = e!.target
    setUserData({...userData, [name]: value})
  }

  const onClickHandler = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:4000/signup", userData)

      if(res.data) {
        showSignupModal!(false)
      }
    } catch(err) {
      console.log(err);
    }
  };

  // add errors and succsess outputs

  return (
    <div className="modal-container" onClick={() => {showSignupModal!(false)}}>
      <div className="modal-wrapper" onClick={e => {e.stopPropagation()}}>
        <svg className="close-icon"  onClick={() => showSignupModal!(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
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
            <button className="form-button" type="button" onClick={() => onClickHandler()}>
              <span className="form-text">Sign Up</span>
              <svg className="icon-paw"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
              </svg>
            </button>
            <button className="form-button button-outline" type="button" onClick={() => {showSignupModal!(false)}}>
              <span>Cancel</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupModal;