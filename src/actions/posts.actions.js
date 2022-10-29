import { postConstants } from "./constants";
import axios from "axios";

const baseURL = "http://localhost:8000";

export const createPost = (data) => {
    console.log(data)
    return async dispatch => {
        dispatch({ type: postConstants.POST_REQUEST });
        try {
            await axios.post(baseURL + `/posts`, data).then((response) => {
                console.log(response.data);
                dispatch({
                    type: postConstants.POST_CREATE_SUCCESS,
                    payload: {
                        posts: response.data
                    }
                });
                // axios.get(baseURL + `/posts`).then((response) => {
                //     console.log(response.data);
                //     dispatch({
                //         type: postConstants.POST_GET_ALL_SUCCESS,
                //         payload: {
                //             posts: response.data
                //         }
                //     });
                // })
            }).catch((error) => {
                dispatch({
                    type: postConstants.POST_CREATE_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: postConstants.POST_CREATE_FAILURE,
                payload: error
            });
        }
    }
}

export const getAllPost = () => {
    return async dispatch => {
        dispatch({ type: postConstants.POST_REQUEST });
        try {
            await axios.get(baseURL + `/posts`).then((response) => {
                console.log(response.data);
                dispatch({
                    type: postConstants.POST_GET_ALL_SUCCESS,
                    payload: {
                        posts: response.data
                    }
                });
            }).catch((error) => {
                dispatch({
                    type: postConstants.POST_GET_ALL_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: postConstants.POST_GET_ALL_FAILURE,
                payload: error
            });
        }
    }
}

export const getPostById = (postId) => {
    return async dispatch => {
        dispatch({ type: postConstants.POST_REQUEST });
        try {
            await axios.get(baseURL + `/posts/${postId}`).then((response) => {
                console.log(response.data);
                dispatch({
                    type: postConstants.POST_GET_SUCCESS,
                    payload: {
                        posts: response.data
                    }
                });
            }).catch((error) => {
                dispatch({
                    type: postConstants.POST_GET_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: postConstants.POST_GET_FAILURE,
                payload: error
            });
        }
    }
}

export const editPostById = (postId, data) => {
    return async dispatch => {
        dispatch({ type: postConstants.POST_REQUEST });
        try {
            await axios.put(baseURL + `/posts/${postId}`, data).then(() => {
                dispatch({
                    type: postConstants.POST_EDITED_SUCCESS,
                    payload: {}
                });
                // axios.get(baseURL + `/posts`).then((response) => {
                //     console.log(response.data);
                //     dispatch({
                //         type: postConstants.POST_GET_ALL_SUCCESS,
                //         payload: {
                //             posts: response.data
                //         }
                //     });
                // })
            }).catch((error) => {
                dispatch({
                    type: postConstants.POST_EDITED_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: postConstants.POST_EDITED_FAILURE,
                payload: error
            });
        }
    }
}

export const deletePostById = (postId) => {
    return async dispatch => {
        dispatch({ type: postConstants.POST_REQUEST });
        try {
            await axios.delete(baseURL + `/posts/${postId}`).then(() => {
                dispatch({
                    type: postConstants.POST_DELETE_SUCCESS,
                    payload: {}
                });
                // axios.get(baseURL + `/posts`).then((response) => {
                //     console.log(response.data);
                //     dispatch({
                //         type: postConstants.POST_GET_ALL_SUCCESS,
                //         payload: {
                //             posts: response.data
                //         }
                //     });
                // })
            }).catch((error) => {
                dispatch({
                    type: postConstants.POST_DELETE_FAILURE,
                    payload: error
                });
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: postConstants.POST_DELETE_FAILURE,
                payload: error
            });
        }
    }
}