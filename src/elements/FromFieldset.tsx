import { FC } from "react"
import "./FromFieldset.sass"

interface FromFieldsetProps {
  children?: JSX.Element|JSX.Element[]
}

const FromFieldset: FC<FromFieldsetProps> = ({ children }) => {
  return (
    <fieldset className="form-fieldset">
      {children}
    </fieldset>
  );
}

export default FromFieldset;