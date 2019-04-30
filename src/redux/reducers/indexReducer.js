const indexReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_BOOK":
            return {...state,book:action.book};
       
        default: return state;
    }
}

export default indexReducer;