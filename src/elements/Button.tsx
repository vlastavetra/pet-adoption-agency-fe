import { FC } from "react"
import "./Button.sass"

interface ButtonProps {
  text?: string
  color?: string
  onClickHandler?: Function | void
  style?: string
  className?: string
}

const Button: FC<ButtonProps> = ({ text, color = "green", style = "outline-none", className = "", onClickHandler = () => {} }) => {
  return (
    <button className={`button button-${color} button-${style} ${className}`} onClick={() => onClickHandler!()} type="button">
      <span>{text}</span>
    </button>
  );
}

export default Button;