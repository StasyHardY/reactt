/* eslint-disable */
import React from "react";
import api from "../api";
import { useState } from "react";
import { useEffect } from "react";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserPage = ({id, qualities}) => {
   const history = useHistory();
   const [user,setUser] = useState()
   
   useEffect(() => {
      api.users.getById(id).then((data) => setUser(data));
  }, []);
  const backToUsers = () => {
   history.push("/Users");
  };

  if (!user) {
     return <h1>Loading...</h1>
   }
  else {
   return (
      <>
         <h1>{user.name}</h1>
         <h1>Профессия: {user.profession.name}</h1>
         <h5>{<QualitiesList qualities={user.qualities} />}</h5>
         <h6>CompletedMeetings: {user.completedMeetings}</h6>
         <h3>Rate: {user.rate}</h3>
         <button onClick={backToUsers}>Все пользователи </button>
      </>
      );
   };
};
 
export default UserPage;