import { useState } from 'react';
import { addUser } from "../Features/users/usersSlice";
import { useDispatch } from "react-redux";
import { v4 as newUUID } from 'uuid';
import { Button, Modal, Form, Input } from "antd";

const RegisterForm = () => {    

    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        email:'',
        password: '',
    })    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    
      const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 16,
        },
      };


    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value.trim(),
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        //Falta validar los datos ingresados
        dispatch(
            addUser({
                ...newUser,
                id: newUUID(),
            })
        );        

        setNewUser({        
            id: '',
            name: '',
            email:'',
            password: ''
        })
    }

    return(
        <>
        <Button type="primary" onClick={showModal}>
          Register
        </Button>
        <Modal
          title="Register"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[      
            <Button onClick={handleCancel}>Cancelar</Button>,      
          ]}
          centered
        >          
        <div className="container mt-5 pt-4">
            <form onSubmit={handleSubmit} name="registerForm" id="registerForm">
            <div className="form-group">
                <label htmlFor="InputName">Name</label>
                <input name="name" type="text" className="form-control" id="InputName" placeholder="Enter your name" value={newUser.name} onChange={handleChange} />  
            </div>                
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={newUser.email} onChange={handleChange} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={newUser.password} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>       
        </div>
        </Modal>
    </>         
    );

}


export default RegisterForm;