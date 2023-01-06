import { FC } from "react"
import "./Button.sass"

interface LoginModalProps {
  text?: string
  color?: string
  onClickHandler?: Function | void
  style?: string
}

const LoginModal: FC<LoginModalProps> = ({ text, color = "green", style = "outline-none", onClickHandler = () => {} }) => {
  return (
    <button className={`button button-${color} button-${style}`} onClick={() => onClickHandler!()} type="button">
      <span>{text}</span>
    </button>
  );
}

export default LoginModal;