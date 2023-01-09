import { FC } from "react"
import "./FormLabel.sass"

interface FormLabelProps {
  htmlFor?: string
  text?: string
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">{text}</label>
  );
}

export default FormLabel;