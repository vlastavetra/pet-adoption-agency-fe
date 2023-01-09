import {createContext} from "react"

interface AuthContextType {
  user: string
  token: string
  isAdmin: string
  setUser?: React.Dispatch<any>
  setToken?: React.Dispatch<any>
  setIsAdmin?: React.Dispatch<any>
}

const initialState = {
  user: "",
  token: "",
  isAdmin: ""
};

export const AuthContext = createContext<AuthContextType>(initialState)
