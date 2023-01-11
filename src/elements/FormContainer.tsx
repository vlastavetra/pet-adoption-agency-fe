import { FC } from "react"
import "./FormContainer.sass"

interface FormContainerProps {
  children?: JSX.Element|JSX.Element[]
}

const FormContainer: FC<FormContainerProps> = ({children}) => {
  return (
    <form action="" className="form">
      {children}
    </form>
  );
}

export default FormContainer;