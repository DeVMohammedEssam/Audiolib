import axios from "axios";
import config from "../../config";
import history from "../../routes/history"

const getBook = (book) => ({
    type: "GET_BOOK",
    book
})




export const startGetBook = (id) => {
    return (dispatch) => {

        return axios.get(`${config.serverURL}/api/dashboard/book/${id}`).then(response => {

            dispatch(getBook(response.data.book))

        })
    }


}


