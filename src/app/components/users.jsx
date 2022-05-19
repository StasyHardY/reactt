/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import UserPage from "./page/userPage";
import UsersListPage from "./page/usersListPage/usersListPage";
import { useParams } from "react-router-dom";
import EditUserPage from './ui/editUserPage';
const Users = () => {
    const params = useParams();
    const { id, edit } = params;
    return (
        id ? (
            edit ? (
                <EditUserPage id={id}/>
            ) : (
                <UserPage userId={id} />
            )
        ) : (
            <UsersListPage />
        )
    );
};

Users.propTypes = {

    count: PropTypes.number
};
export default Users;
