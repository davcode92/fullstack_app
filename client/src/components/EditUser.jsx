
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../redux/actions';
   

const EditUser = ({el}) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   
   const [fullName,setFullName]= useState(el.fullName);
   const [email,setEmail]= useState(el.email);
   const [phone,setPhone]= useState(el.phone);
   
   const dispatch = useDispatch();
   const handleSubmit = (e) => {
    e.preventDefault();
    const editedUser = {
    _id:el._id,
    fullName: fullName,
    email: email,
    phone: phone,
   };
  fullName && phone && email 
  ? dispatch(editUser(editedUser))
  : alert("fill the blanks");
  handleClose();
};
   return <div><Button variant="primary" onClick={handleShow}>
   Edit
 </Button>
    <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Editing User</Modal.Title>
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
 </Modal></div>;
};

export default EditUser;