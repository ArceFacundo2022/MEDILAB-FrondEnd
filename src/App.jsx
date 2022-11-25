import React,{useState, useContext, useReducer} from 'react';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouters';
import { authReducer } from './reducers/authReducers';

function App() {
  const infoContextUser = {
    isLogged : false,
    userName : "PepeGuapo"
  }
  const initialRoleXD = {
    role : "admin",
    userName : "PepeGuapito"
  }
  const [roleXD, dispatch] = useReducer(authReducer, initialRoleXD);

  const [logged, dispatchLogged] = useReducer(authReducer, infoContextUser);

  return (
    <AuthContext.Provider value ={{
      infoContextUser,
      roleXD, dispatch,
      logged, dispatchLogged
    }}>
      <AppRouter/>
    </AuthContext.Provider>  
  )
}

export default App
