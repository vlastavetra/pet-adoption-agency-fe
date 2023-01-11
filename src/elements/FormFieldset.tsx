import { FC } from "react"
import "./FormFieldset.sass"

interface FormFieldsetProps {
  children?: JSX.Element|JSX.Element[]
}

const FormFieldset: FC<FormFieldsetProps> = ({ children }) => {
  return (
    <fieldset className="form-fieldset">
      {children}
    </fieldset>
  );
}

export default FormFieldset;