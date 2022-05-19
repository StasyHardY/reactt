/* eslint-disable */
import React from "react";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";

import UserPage from "./components/page/userPage";
import UsersListPage from "./components/page/usersListPage/usersListPage";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from "./components/notFound";
import NavBar from './components/ui/navBar';

function App() {
    return ( 
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:id?/:edit?"  component={Users} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div> 
    );
};
export default App;
