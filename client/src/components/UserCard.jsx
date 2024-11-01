import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import EditUser from "./EditUser";
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../redux/actions";
const UserCard = ({ el }) => {
  const dispatch = useDispatch();
  const handleDelete = (_id) => {
     dispatch(deleteUser(_id)); 
     dispatch(getUsers());
  };
   return (
   <div>
       <Card style={{ width: '18rem',margin:'25px' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{el.fullName}</ListGroup.Item>
        <ListGroup.Item>{el.email}</ListGroup.Item>
        <ListGroup.Item>{el.phone}</ListGroup.Item>
      </ListGroup>
      <EditUser el={el} />
      <Button variant="danger" onClick={()=>handleDelete(el._id)}>DELETE</Button>
    </Card>
      </div>
   );
};

export default UserCard;