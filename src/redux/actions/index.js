import axios from "axios";
import history from "../../routes/history"
 const getBook = (book) => ({
    type: "GET_BOOK",
    book
})




export const startGetBook = (id) => {
    return (dispatch) => {
 
        return axios.get("http://localhost:8000/api/dashboard/book/"+id).then(response => {
    
            dispatch(getBook(response.data.book))
            
        })
    }


}


