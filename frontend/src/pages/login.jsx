import { useState } from "react";
import {Link, useNavigate } from " react-router-dom";

function Login(){
    const navigate =useNavigate();

    const[email, setemail]=useState("");
    const[password, setpassword]=useState("");

    const handelLogin=(e)=>{
        e.preventDefault();

        if(!email || !password){
            alert("plese fill all feild");
            return;
        }
        navigate("/dashbord");
    };
    return (
        <div classname="container">
        <div classname="form-box">
            <h2>Login</h2>

            <form on submit={handelLogin}>
                <input 
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value) }
            />
            <input
                type="password"
                placeholder="password"
                value={passsword}
                onChange={(e) => setpassword(e.target.value) }
                />

                <button type="submit">Login</button>
                </form>
                <p>
                    don't have an account? <Link to="/signup">signup</Link>
                
                </p>
                </div>
                </div>
            );
        }             

        export default Login;
