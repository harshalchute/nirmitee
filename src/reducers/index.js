import { combineReducers } from "redux";

import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
import commentReducer from "./comment.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
    comments: commentReducer
});

export default rootReducer;