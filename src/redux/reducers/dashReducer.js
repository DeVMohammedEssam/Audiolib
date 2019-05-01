const userReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.data]
            }
        case "GET_BOOKS":
            return {
                ...state,
                books: action.books
            }
        case "DELETE_BOOK":
            return {
                ...state,
                books: state.books.filter((book) => !book.id == action.id)
            }


        default: return state;
    }
}

export default userReducer;