import React from 'react';
import {Link} from "react-router-dom";
import './Login.css';
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h2 style={{textAlign:"center",fontFamily:"arial",marginTop:"100px"}}>Log In</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className='shipment-form'>

                                
                                <input name="email"  ref={register({ required: true })} placeholder="Your email" />
                                {errors.email && <span>This field is required</span>}
                                <input name="pass" ref={register({ required: true })} placeholder="Your password" />
                                {errors.pass && <span>This field is required</span>}


                                <Link to='/'><input type="submit" value="Log In"/></Link>
                            </form>
        </div>
    );
};

export default Login;