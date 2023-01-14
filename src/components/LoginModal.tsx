import { FC, useContext, useState } from "react"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"
import "../App.sass"
import Button from "../elements/Button"

interface LoginModalProps {
  showLoginModal?: React.Dispatch<React.SetStateAction<boolean>>
  setUser?: React.Dispatch<any>
  setToken?: React.Dispatch<any>
}

const LoginModal: FC<LoginModalProps> = ({ showLoginModal }) => {
  const { setUser, setToken, setIsAdmin } = useContext(AuthContext)
  const [userData, setUserData] = useState({ email: "", password: "" })

  const onChangeHandler = (e?: { target: { value?: any; name?: any } } | undefined) => {
    const { name, value } = e!.target
    setUserData({ ...userData, [name]: value })
  }

  const onClickHandler = async (e?: Event) => {
    e?.preventDefault()
    try {
      const res = await axios.post("http://127.0.0.1:4000/user/login", userData)

      if (res.data.token) {
        localStorage.setItem("user", `${res.data.firstname} ${res.data.lastname}`)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userId", res.data.id)
        res.data.isAdmin && localStorage.setItem("isAdmin", res.data.isAdmin)
        setUser!(`${res.data.firstname} ${res.data.lastname}`)
        setToken!(res.data.token)
        showLoginModal!(false)
        setIsAdmin!(res.data.isAdmin)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="modal-container" onClick={() => { showLoginModal!(false) }}>
      <div className="modal-wrapper" onClick={e => { e.stopPropagation() }}>
        <svg className="close-icon" onClick={() => showLoginModal!(false)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
        </svg>
        <form action="" className="form">
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
          <div className="form-button-group">
            <Button
              text="Login"
              onClickHandler={onClickHandler!}
            />
            <Button
              text="Cancel"
              style="outline"
              onClickHandler={() => showLoginModal!(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;