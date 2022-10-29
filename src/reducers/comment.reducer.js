import { commentConstants } from "../actions/constants";

const initState = {
    comments: [],
    loading: false,
    error: null,
    message: ''
}

export default (state = initState, action) => {
    console.log(action);
    switch (action.type) {
        case commentConstants.COMMENT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case commentConstants.COMMENT_GET_ALL_SUCCESS:
            state = {
                ...state,
                comments: action.payload.comments,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_GET_ALL_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case commentConstants.COMMENT_ADD_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_ADD_FAILURE:
            state = {
                ...state,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_GET_SUCCESS:
            state = {
                ...state,
                comments: action.payload.comments,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_GET_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case commentConstants.COMMENT_EDITED_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_EDITED_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case commentConstants.COMMENT_DELETE_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_DELETE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;
        case commentConstants.COMMENT_REPLAY_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: ''
            }
            break;
        case commentConstants.COMMENT_REPLAY_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error
            }
            break;


    }
    return state;
}