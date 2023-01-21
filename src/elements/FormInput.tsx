import { ChangeEventHandler, FC } from "react"
import "./FormInput.sass"

interface FormInputProps {
  onChangeHandler?: ChangeEventHandler<HTMLInputElement> | undefined
  type?: string
  name?: string
  id?: string
  value?: string
  required?: boolean
  className?: string
}

const FormInput: FC<FormInputProps> = ({ onChangeHandler, type, name, id, value, required, className }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={onChangeHandler}
      value={value}
      required={required}
      className={`form-input ${className}`}
    />
  );
}

export default FormInput;