const AReducer= (prevState, action)=>{
    switch(action.type){
        case 'SET_ALERT':
            return action.payload
        case 'REMOVE_ALERT':
            return null
        default:
            return prevState
    }
};

export default AReducer;