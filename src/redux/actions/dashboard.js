
import axios from "axios"
import config from "../../config"
const uploadBook = (data) => ({
    type: "ADD_BOOK",
    data
})
export const startUploadBook = (data) => {
    return (dispatch) => {
        return axios.post("/api/dashboard/book", { data }, {

        }).then((response) => {
            dispatch(uploadBook(response.data))

        })
    }
}
const getAllBooks = (books) => ({
    type: "GET_BOOKS",
    books
})

export const startGetAllBooks = () => {
    return (dispatch) => {
        axios.get("http://localhost:8000/api/dashboard/book", {

        }).then((response) => {
            dispatch(getAllBooks(response.data.books))

        })
    }
}