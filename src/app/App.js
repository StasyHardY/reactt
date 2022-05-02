/* eslint-disable */
import React from "react";
import Users from "./components/users";
import Login from "./components/login";
import Main from "./components/main";
import NavBar from "./components/navBar";
import UserPage from "./components/userPage";
import UsersList from "./components/usersList";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from "./components/notFound";

function App() {
    return ( 
        <div>
            <NavBar/>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" render={(props) => <Users {...props} component={Users} />
                }
                />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div> 
    );
};
export default App;
