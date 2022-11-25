<<<<<<< HEAD
import React,{useState, useContext, useReducer} from 'react';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouters';
import { authReducer } from './reducers/authReducers';
=======

import UserProfile from '../pages/UserProfile'
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d

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

<<<<<<< HEAD
  const [logged, dispatchLogged] = useReducer(authReducer, infoContextUser);

  return (
    <AuthContext.Provider value ={{
      infoContextUser,
      roleXD, dispatch,
      logged, dispatchLogged
    }}>
      <AppRouter/>
    </AuthContext.Provider>
=======
    <UserProfile/>
>>>>>>> 63d0da337d466e06048eb5ee9055f9c54625828d
    
  )
}

export default App
