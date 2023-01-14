import { FC } from "react"
import {Navigate} from "react-router-dom"

interface PrivateRouteProps {
  children?: any
  currentUser?: string
}

const PrivateRoute: FC<PrivateRouteProps> = ({currentUser, children}) => {
    return currentUser ? children : <Navigate to='/'></Navigate>;
  };

export default PrivateRoute