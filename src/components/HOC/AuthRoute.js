import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} component={(props) => {
        const user = window.localStorage.getItem('isUser');
        if (!user) {
            return <Component {...props} />
        } else {
            return <Redirect to={`/`} />
        }
    }} />
}

export default AuthRoute;