const userReducer = (state = {books:[]}, action) => {
    switch (action.type) {
        case "ADD_BOOK":
        return {
            ...state,
            books:[...state.books,action.data]
        }
        case "GET_BOOKS":
        return {
            ...state,
            books:action.books
        }
        
        default: return state;
    }
}

export default userReducer;