import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const PrivateRoutes = ({ children }) => {
  // Colocar el context creado en el archivo 'AuthContext.jsx'
  const logged2 = localStorage.getItem("Token") || false;

  //const { logged } = useContext(AuthContext);

  
  return logged2
          ? children
          : <Navigate to='/' />
}
