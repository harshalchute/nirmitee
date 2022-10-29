import { postConstants } from "../actions/constants";

const initState = {
    posts: [],
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case postConstants.POST_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case postConstants.POST_GET_ALL_SUCCESS:
            state = {
                ...state,
                posts: action.payload.posts,
                loading: false,
                message: ''
            }
            break;
        case postConstants.POST_GET_ALL_FAILURE:
            state = {
                ...state,
                posts: [],
                loading: false,
                message: action.payload.error
            }
            break;
        case postConstants.POST_GET_SUCCESS:
            state = {
                ...state,
                posts: action.payload.posts,
                loading: false,
                message: ''
            }
            break;
        case postConstants.POST_GET_FAILURE:
            state = {
                ...state,
                posts: [],
                loading: false,
                message: action.payload.error
            }
            break;
        case postConstants.POST_CREATE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: 'Post create has successful'
            }
            break;
        case postConstants.POST_EDITED_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: 'post edited has successful'
            }
            break;
        case postConstants.POST_DELETE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: 'Post delete has successful'
            }
            break;
        case postConstants.POST_CREATE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case postConstants.POST_EDITED_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case postConstants.POST_DELETE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
    }
    return state;
}