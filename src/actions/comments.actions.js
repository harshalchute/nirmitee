import { commentConstants } from "./constants";
import axios from "axios";

const baseURL = "http://localhost:8000";


// export const getPostByIdToCmt = (postId) => {
//     return axios.get(baseURL + `/comments?postId=${postId}`).then((response) => {
//         const comments = response.data;
//         return comments;
//     }).catch((error) => {
//         return error;
//     });
// }

export const getPostByIdCmt = (postId) => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_REQUEST });
        try {
            return await axios.get(baseURL + `/comments?postId=${postId}`).then((response) => {
                const comments = response.data;
                dispatch({
                    type: commentConstants.COMMENT_GET_SUCCESS,
                    payload: {
                        comments: response.data
                    }
                });
                return comments;
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_GET_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_GET_FAILURE,
                payload: error
            });
        }
    }
}


export const addCmt = (postId, data) => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_REQUEST });
        try {
            return await axios.post(baseURL + `/comments`, data).then(() => {
                dispatch({
                    type: commentConstants.COMMENT_ADD_SUCCESS,
                    payload: {}
                });
                return axios.get(baseURL + `/comments?postId=${postId}`).then((response) => {
                    const comments = response.data;
                    dispatch({
                        type: commentConstants.COMMENT_GET_SUCCESS,
                        payload: {
                            comments: response.data
                        }
                    });
                    return comments;
                })
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_ADD_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_ADD_FAILURE,
                payload: error
            });
        }
    }
}

export const getAllCmt = () => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_REQUEST });
        try {
            await axios.get(baseURL + `/comments`).then((response) => {
                console.log(response.data);
                dispatch({
                    type: commentConstants.COMMENT_GET_ALL_SUCCESS,
                    payload: { comments: response.data }
                });
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_GET_ALL_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_GET_ALL_FAILURE,
                payload: error
            });
        }
    }
}

export const getCmtById = (commentId) => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_GET_SUCCESS });
        try {
            await axios.get(baseURL + `/comments/${commentId}`).then((response) => {
                console.log(response.data);
                dispatch({
                    type: commentConstants.COMMENT_GET_SUCCESS,
                    payload: {
                        comments: response.data
                    }
                });
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_GET_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_GET_FAILURE,
                payload: error
            });
        }
    }
}

export const editCmtById = (commentId, postId, data) => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_REQUEST });
        try {
            return await axios.put(baseURL + `/comments/${commentId}`, data).then(() => {
                dispatch({
                    type: commentConstants.COMMENT_EDITED_SUCCESS,
                    payload: {}
                });
                return axios.get(baseURL + `/comments?postId=${postId}`).then((response) => {
                    const comments = response.data;
                    dispatch({
                        type: commentConstants.COMMENT_GET_SUCCESS,
                        payload: {
                            comments: response.data
                        }
                    });
                    return comments;
                })
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_EDITED_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_EDITED_FAILURE,
                payload: error
            });
        }
    }
}

export const deleteCmtById = (commentId, postId) => {
    return async dispatch => {
        dispatch({ type: commentConstants.COMMENT_REQUEST });
        try {
            return await axios.delete(baseURL + `/comments/${commentId}`).then(() => {
                dispatch({
                    type: commentConstants.COMMENT_DELETE_SUCCESS,
                    payload: {}
                });
                return axios.get(baseURL + `/comments?postId=${postId}`).then((response) => {
                    const comments = response.data;
                    dispatch({
                        type: commentConstants.COMMENT_GET_SUCCESS,
                        payload: {
                            comments: response.data
                        }
                    });
                    return comments;
                })
            }).catch((error) => {
                dispatch({
                    type: commentConstants.COMMENT_DELETE_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: commentConstants.COMMENT_DELETE_FAILURE,
                payload: error
            });
        }
    }
}
