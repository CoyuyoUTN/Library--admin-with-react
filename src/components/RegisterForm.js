import { useState } from 'react';
import { addUser } from "../Features/users/usersSlice";
import { useDispatch } from "react-redux";
import { v4 as newUUID } from 'uuid';

const RegisterForm = () => {    

    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        id: '',
        name: '',
        email:'',
        password: '',
    })    

/*     function isEmailValid(email){
        //Funcion de validacion basica de email con los metodos vistos hasta el momento en el SK de React.js
        const emailParts = email.split('@');
        //Verifico que el email tenga uno y solo un simbolo @    
        if(emailParts.length !== 2){
            return false;
        }else{
            const domainParts = emailParts[1].split('.');
            //verifico que despues del @ esten el dominio y la extension
            if(domainParts.length <2){
                return false;
            }else{
                //Verifico que no sean vacios ni el usuario, ni el dominio, ni la extension
                if((emailParts[0].length > 0) && (domainParts[0].length >0) && (domainParts[1].length >0)){
                    return true;
                }else{
                    return false;
                }
            }
        }
    } */

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
        <div className="container">
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
    );

}


export default RegisterForm;