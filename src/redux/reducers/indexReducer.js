const indexReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_BOOK":
            return {book:action.book,...state};
       
        default: return state;
    }
}

export default indexReducer;