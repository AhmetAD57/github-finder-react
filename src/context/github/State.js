import React, {useReducer} from "react";
import Reducer from "./Reducer"
import Context from "./Context"
import axios from "axios";

const State=(props)=>{
    
    //Başangıç state i.
    const initialState={
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch]= useReducer(Reducer, initialState);

    const searchUsers =(keyword)=>{
        setLoading();
            
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
            dispatch({type:"SEARCH", payload: res.data.items}); //Reducer metotunun action parametresi için veriler veriliyor.
        });
    }

    const getUser=(username)=> {
        setLoading();
        
        setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then(res =>{
                dispatch({type:"GET_USER", payload: res.data});
            })
        }, 1000);
    }


    const cleanResults=(keyword)=>{
        dispatch({type:"CLEAR"});
    }
    
    const setLoading=()=>{
        dispatch({type: "SET_LOADING"})
    }

    
    return<Context.Provider value={{users: state.users, user: state.user, loading: state.loading, searchUsers, cleanResults, getUser}}>
        {props.children}
    </Context.Provider>
}

export default State;