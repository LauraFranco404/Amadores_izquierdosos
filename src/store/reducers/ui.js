const initialState = {
    showModal: true,
    showNotification: false
}

const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_MODAL':
            return {
                ...state,
                showModal:action.payload,
            };
        default:
            return state;
    }
}
export default uiReducer;