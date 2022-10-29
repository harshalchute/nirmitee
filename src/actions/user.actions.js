import { userConstants } from "./constants";

export const login = (user) => {
    // console.log(user)
    return async (dispatch) => {

        dispatch({ type: userConstants.LOGIN_REQUEST })

        if (user.name.length > 2) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('isUser', true);
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: { user }
            })
        } else {
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                payload: { error: "User name allow minimum 3 letter" }
            })
        }
    }
}



export const isUserLoggedIn = () => {
    return async dispatch => {
        const isUser = localStorage.getItem('isUser');
        const user = JSON.parse(localStorage.getItem('user'));
        if (isUser) {
            dispatch({
                type: userConstants.LOGIN_SUCCESS,
                payload: { isUser, user }
            })
        } else {
            dispatch({
                type: userConstants.LOGIN_FAILURE,
                payload: { error: "Please Login page" }
            })
        }
    }
}



export const signout = () => {
    return async dispatch => {

        dispatch({ type: userConstants.LOGOUT_REQUEST })

        localStorage.clear();
        dispatch({ type: userConstants.LOGOUT_SUCCESS })

    }
}