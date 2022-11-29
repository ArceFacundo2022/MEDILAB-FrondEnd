import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const PublicRoutes = ({children}) => {

  const logged2 = localStorage.getItem("Token") || false;
  //const { logged } = useContext(AuthContext)
  
  return logged2
          ? <Navigate to='/Home' />
          : children
}
