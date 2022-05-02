/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import UserPage from "./userPage";
import UsersList from "./usersList";
import { useParams } from "react-router-dom";

const Users = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage id={userId} /> : <UsersList />}</>;
};

Users.propTypes = {

    count: PropTypes.number
};
export default Users;
