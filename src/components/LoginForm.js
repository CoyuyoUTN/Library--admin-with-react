import { useState } from 'react';
import { login } from "../Features/sysConfig/sysConfigSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Form, Input } from "antd";

const LoginForm = () => {    

    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [user, setUser] = useState({
        id: '',
        name: '',
        email:'',
        password: '',
    })    

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
        setUser({
            ...user,
            [e.target.name]: e.target.value.trim(),
        });
    };


    const handleSubmit = (e) => {
        
        var result = users.find(findUser => (findUser.email === user.email));

        if(result && result.email === user.email){
            dispatch(
                login({
                    name: result.name,
                    id: result.id,
                })
            );              
            alert("logued succesfully");
        }else{
            alert("Incorrect access information");
        }

        setUser({        
            email:'',
            password: ''
        })
    }

    return(
        <>
        <Button type="primary" onClick={showModal}>
          Login
        </Button>
        <Modal
          title="Login"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[            
            <Button type="primary" onClick={() => handleSubmit()}>
              Login
            </Button>,
          ]}
          centered
        >        
        <div className="container mt-5 pt-4">
            <form onSubmit={handleSubmit} name="LoginForm" id="LoginForm">      
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={user.email} onChange={handleChange} />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={user.password} onChange={handleChange} />
            </div>
            
            </form>       
        </div>
        </Modal>
    </>        
    );

}


export default LoginForm;