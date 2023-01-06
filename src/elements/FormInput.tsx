import { FC } from "react"
import "../App.sass"

interface LoginModalProps {
  onChangeHandler?: React.Dispatch<React.SetStateAction<boolean>>
  type?: string
  id?: string
  label?: string
}

const LoginModal: FC<LoginModalProps> = ({ onChangeHandler, type, id, label }) => {
  return (
    <fieldset className="form-fieldset">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        className="form-input"
        id={id}
        name={id}
        type={type}
        //onChange={onChangeHandler}
        //value={note.title}
      >
      </input>
    </fieldset>
  );
}

export default LoginModal;