import { FC } from "react"
import "./FormLabel.sass"

interface FormLabelProps {
  htmlFor?: string
  text?: string
  required?: boolean
}

const FormLabel: FC<FormLabelProps> = ({ htmlFor, text, required }) => {
  return (
    <label htmlFor={htmlFor} className="form-label">{text} {required && "*"}</label>
  );
}

export default FormLabel;