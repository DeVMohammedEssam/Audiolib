const indexReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_BOOK":
            return { ...state, book: action.book };
        case "SET_LANG":
            localStorage.setItem("lang", action.lang)
            return {
                ...state,
                lang: action.lang
            }
        default: return state;
    }
}

export default indexReducer;