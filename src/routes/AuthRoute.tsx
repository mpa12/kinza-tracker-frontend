import React from "react";
import Header from "../components/header/Header";
import {Outlet} from "react-router-dom";

const AuthRoute = () => {
    return (
        <Header>
            <Outlet/>
        </Header>
    );
};

export default AuthRoute;
