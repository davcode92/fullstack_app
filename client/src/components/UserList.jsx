import React from "react";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import Spinner from 'react-bootstrap/Spinner';


const UserList = () => {
    const {loading , users } = useSelector((state) => state);
    return (
    <div id="userscont">
      {loading ? (
      <Spinner animation="grow" variant="primary" />
      ) : (
      users.map((el) => <UserCard el={el} key={el._id}/>)
      )}
    </div>
    );
  };

  export default UserList;