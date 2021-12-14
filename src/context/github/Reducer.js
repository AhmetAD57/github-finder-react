const Reducer=(prevState, action)=>{
    switch(action.type){
        case 'SEARCH':
            return{
                ...prevState, users: action.payload, loading: false //Önceki state de değişmeyecekler ...prevState diyerek yeni state aktarılıyor.
            }
        case 'SET_LOADING':
            return{
                ...prevState,
                loading: true
            }
        case 'CLEAR':
            return {
                ...prevState,
                users:[],
                loading: false
            }
        case 'GET_USER':
            return{
                ...prevState,
                user: action.payload,
                loading: false
            }
        default:
            return prevState
    }
};

export default Reducer;