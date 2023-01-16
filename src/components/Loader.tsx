import { FC } from "react"
import "./Loader.sass"

interface LoaderProps {
  children?: JSX.Element | JSX.Element[]
}

const Loader: FC<LoaderProps> = ({ }) => {
  return (
    <div className="loader-container">
      <span className="loader-text text-large">Loading...</span>
    </div>
  );
}

export default Loader;