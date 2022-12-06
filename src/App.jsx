import React,{useState, useContext, useReducer} from 'react';
import { AuthContext } from './context/AuthContext';
import { AppRouter } from './routers/AppRouters';
import { authReducer } from './reducers/authReducers';

function App() {

  const InitialMaster = {
    refresh: false
  }

  const [infoMaster, dispatchMaster] = useReducer(authReducer,InitialMaster)

  return (
    <AuthContext.Provider value ={{
      infoMaster, dispatchMaster
    }}>
      <AppRouter/>
    </AuthContext.Provider>  
  )
}

export default App
