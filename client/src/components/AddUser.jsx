import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";
   

const AddUser = () => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   const [fullName,setFullName]= useState("");
   const [email,setEmail]= useState("");
   const [phone,setPhone]= useState("");
   
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      fullName: fullName,
      email: email,
      phone: phone,
    };
     fullName && email && phone 
     ? dispatch(addUser(newUser))
     : alert("please fill all the fields");
   handleClose();
   setFullName("");
   setEmail("");
   setPhone("");
   };
    return <div>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form action="" onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="">Fullname :</label>
                  <input type="text" 
                  value={fullName}
                   onChange={(e) => setFullName(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="">Email :</label>
                  <input type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="">Phone :</label>
                  <input type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  />
               </div>
               <Button variant="primary" type="submit">
            Save Changes
          </Button>
               
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
   </div>;
};

export default AddUser;