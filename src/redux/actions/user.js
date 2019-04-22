import axios from "axios";
import history from "../../routes/history"
export const signUp = (userData) => ({
    type: "SIGN_UP",
    userData
})

export const logout = () => ({
    type: "LOGOUT"
})


export const innerLogin = (userData) => ({
    type: "LOGIN",
    userData: {
        id: userData._id,
        email: userData.email,
        name: userData.name,
   
    }
})
export const login = () => {
    return (dispatch) => {
        let userData;
       
       
        axios.defaults.headers.common['Authorization'] =localStorage.getItem("userToken")
        console.log(axios.defaults.headers.common)
        return axios.get("http://localhost:8000/api/user/",{ headers: { Authorization: localStorage.getItem("userToken") } }).then(data => {
            userData = data.data.user;
           if(!window.location.href.includes("dashboard")&&window.location.href!="/"){
               window.location.href="/dashboard/analysis"
           }
            dispatch(innerLogin(userData));
         

        })
    }


}


