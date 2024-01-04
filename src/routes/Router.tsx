import React from "react";
import {BrowserRouter, Route, Routes as ReactRoutes} from "react-router-dom";
import Login from "../components/login/Login";
import AuthRoute from "./AuthRoute";

const Router = () => {
    return (
        <BrowserRouter>
            <ReactRoutes>
                <Route path="login" element={<Login/>}/>
                <Route path='*' element={<AuthRoute/>}>
                    <Route index element={<div>Index</div>}/>
                    <Route path="users" element={<div>Users</div>}/>
                </Route>
            </ReactRoutes>
        </BrowserRouter>
    );
};

export default Router;
