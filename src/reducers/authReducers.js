import { useReducer } from "react";

export const authReducer = (state, action) => {
    switch (action.type) {
        case "[Refresh]":
            return {...state, reflesh:true}
        
        default:
            return state
    }
}
