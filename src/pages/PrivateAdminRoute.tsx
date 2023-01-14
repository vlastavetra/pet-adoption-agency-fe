import { FC } from "react"
import {Navigate} from "react-router-dom"

interface PrivateRouteProps {
  children?: any
  isAdmin?: string
}

const PrivateRoute: FC<PrivateRouteProps> = ({isAdmin, children}) => {
    return isAdmin ? children : <Navigate to='/'></Navigate>;
  };

export default PrivateRoute