import { userConstants } from "../actions/constants";

const initState = {
    user: {
        name: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case userConstants.LOGIN_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
                authenticate: true,
                authenticating: false
            }
            break;

        case userConstants.LOGOUT_REQUEST:
            state = {
                ...initState,
                loading: true
            }
            break;
        case userConstants.LOGOUT_SUCCESS:
            state = {
                ...initState,
            }
            break;
        case userConstants.LOGOUT_FAILURE:
            state = {
                ...initState,
                error: action.payload.error,
                loading: false
            }
            break;
    }
    return state;
}