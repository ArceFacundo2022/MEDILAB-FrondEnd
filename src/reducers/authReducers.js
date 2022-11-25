import { useReducer } from "react";

export const authReducer = (state, action) => {
    switch (action.type) {
        case "[setDatos]":
            switch (action.atributo){
                case nombreyape:
                    return {...state, nombreyape:action.value}
                default:
                    return state
            }
        case "[setRole]":
            return (state.role == "admin")
                ? {...state, role:"notAdmin"}
                : {...state, role:"admin"}

        case "[setLogged]":
            alert("hola?")
            console.log(state)
            return {...state, isLogged:true}
        
        default:
            return state
    }
}
