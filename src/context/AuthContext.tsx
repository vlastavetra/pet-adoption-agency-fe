import {createContext} from "react";

interface AuthContextType {
  user: string,
  token: string,
  setUser?: React.Dispatch<any>,
  setToken?: React.Dispatch<any>
}

const initialState = {
  user: "",
  token: ""
};

export const AuthContext = createContext<AuthContextType>(initialState);
