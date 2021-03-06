
const initialState = {
    loading:false
}

export const alertReducer=(state = initialState, action )=>{

    switch(action.type){
        case 'LOADING':
            return {
                ...state,
                loading:action.payload
            }

        default: 
            return state;
    }
}