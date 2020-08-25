import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Login.css';
import { useForm } from "react-hook-form";
import { createContext } from 'react';
import { useContext } from 'react';


const AuthContext = createContext();

export const AuthProvider = (props) => {

     const [user,setUser] =  useState(null);
     return <AuthContext.Provider value={[user,setUser]}>{props.children}</AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext);



const Login = () => {
    
    const [user,setUser] = useAuth();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => setUser(data);

    return (
        <div>
            <h2 style={{textAlign:"center",fontFamily:"arial",marginTop:"100px"}}>Log In</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='shipment-form'>

                                
                                <input name="email"  ref={register({ required: true })} placeholder="Your email" />
                                {errors.email && <span>This field is required</span>}
                                <input name="pass" ref={register({ required: true })} placeholder="Your password" />
                                {errors.pass && <span>This field is required</span>}

                               
                                <input type="submit" value="Log In"/>
                            </form>
        </div>
    );
};

export default Login;