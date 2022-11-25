import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const PublicRoutes = ({children}) => {

  const { logged } = useContext(AuthContext)
  
  return logged.isLogged
          ? <Navigate to='/Home' />
          : children
}
