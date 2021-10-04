import axios from "axios";
import { setSignUpLoading, setStatus } from "./loader";
import Swal from "sweetalert2";
import { Auth } from "../../lib/middleware";

const BASE_URL = process.env.REACT_APP_BASE_URL
 const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
     showConfirmButton: false,
    iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
    timer: 1500,
    timerProgressBar: true,
  });

const setSignin = (action) => {
    return { type: 'SIGNIN', payload: action }
};

const setSignup = (action) => {
    return { type: 'SIGNUP', payload: action }
};


export const signInUser = (credentials) => async (dispatch) => {
    try {
        dispatch(setStatus(false))
        const response = await axios.post(`${BASE_URL}/users/login/email`, credentials)
       
        if (!response.data.hasError) {
            const {
                user,
                token
            } = response.data.data;
            Auth.setToken(token,user);
            dispatch(setSignin(user));
            Toast.fire({
                icon: "success",
                title: "Login successful",
            })
            setTimeout(() => {
                window.location.reload()
				}, 50);
           
            return true; 
        } else {
              Toast.fire({
                icon: "error",
                title: response.data.errors.message,
              });
            return false
        };

    } catch (error) {
         Toast.fire({
                icon: "error",
                title: "Login Failed",
            });
        console.log(error);
        return false;
    }
};

export const signUpUser = (credentials) => async (dispatch) => {
    try {
        dispatch(setSignUpLoading(true));
        const response = await axios.post(`${BASE_URL}/users/register/email`, credentials)
        if (!response.data.hasError) {
            const {
                user,
                token
            } = response.data.data;
            Auth.setToken(token, user);
            dispatch(setSignup(user));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            })
             setTimeout(() => {
                window.location.reload()
				}, 50);
            return true;
        } else {
             Toast.fire({
                icon: "error",
                title: response.data.errors.message,
             })
            return false
        };

    } catch (error) {
        console.log(error);
        return false;
    }
};

export const signOutUser = () => async (dispatch) => {
    try {
        await Auth.destroyToken();
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}


