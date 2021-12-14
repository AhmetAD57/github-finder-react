import React, {useReducer} from "react";
import AReducer from "./AReducer"
import AContext from "./AContext"

const AState=(props)=>{
    const initialState=null;

    const [state, dispatch] = useReducer(AReducer, initialState);

    const setAlert=(msg, type)=>{
       dispatch({type:"SET_ALERT", payload:{msg, type}});
       
       setTimeout(() => {
        dispatch({type:"REMOVE_ALERT"});
       }, 3000);
    }

    
    return<AContext.Provider value={{alert: state, setAlert}}>
        {props.children}
    </AContext.Provider>
}

export default AState;