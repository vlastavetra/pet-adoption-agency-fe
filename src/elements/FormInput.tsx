import { ChangeEventHandler, FC } from "react"
import "./FormInput.sass"

interface FormInputProps {
  onChangeHandler?: ChangeEventHandler<HTMLInputElement> | undefined
  type?: string
  name?: string
  id?: string
  value?: string
}

const FormInput: FC<FormInputProps> = ({ onChangeHandler, type, name, id, value }) => {
  return (
    <input
      className="form-input"
      id={id}
      name={name}
      type={type}
      onChange={onChangeHandler}
      value={value}
    />
  );
}

export default FormInput;