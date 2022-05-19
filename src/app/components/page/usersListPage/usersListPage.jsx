/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { paginate } from "../../../utils/paginate";
import Pagination from "../../common/pagination";
import GroupList from "../../common/Group";
import api from './../../../../api'
import SearchStatus from "../../ui/searchStatus";
import UserTable from "../../ui/userTable";
import _ from "lodash";
import SearchUsers from "../../searchUsers";

const UsersListPage =() => {

    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfessions] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: "name", order: "desc" });
    const [searchUser, setSearchUser] = useState(); 
    const pageSize = 4;

    const [users, setUsers] = useState(null);
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleSearchUser = ({target}) => {
        setSearchUser(target.value);
        setSelectedProf();
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        console.log("page: ", pageIndex);
    };

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
        setSearchUser("");
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => _.isEqual(user.profession, selectedProf))
            : searchUser
            ? users.filter((user) => user.name.includes(searchUser))
            : users;
        const count = filteredUsers.length;
        const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order]);
        
        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        const clearFilter = () => {
            setSelectedProf();
        };
        return (
            <div className="d_flex">
                {professions && (
                    
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    <SearchUsers value={searchUser} onChangeUser={handleSearchUser} />
                    {count > 0 && (
                        <UserTable users={usersCrop} selectedSort={sortBy} onSort={handleSort} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} />    
                    )}
                </div>
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        ); 
    };
    return "loading...";
};


 UsersListPage.propTypes = {
     users: PropTypes.array
};

export default UsersListPage;
