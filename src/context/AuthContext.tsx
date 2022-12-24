import {createContext} from "react";

interface AuthContextType {
  auth: string;
}

const initialState = {
  auth: ""
};

export const AuthContext = createContext<AuthContextType>(initialState);
