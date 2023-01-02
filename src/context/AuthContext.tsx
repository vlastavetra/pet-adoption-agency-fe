import {createContext} from "react";

interface AuthContextType {
  user: string
  token: string
}

const initialState = {
  user: "",
  token: ""
};

export const AuthContext = createContext<AuthContextType>(initialState);
