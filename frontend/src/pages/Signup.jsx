import { useState } from "react";
import axis from "axis";
import {useNavigate, Link } from "react-router-dom";

function signup() {
    const navigate = useNavigate();

     const [name, setName]=useState("");
     const [email, setEmail]=useState("");
     const [password, setpassword]=useState("");

     const handelSignup =async (e) =>{
        e.preventDefault();

        try{
            await axios.post("http://localhost:5000/api.signup",{
                name,
                email,
                password,
            });

            alert(signup successfull");
            navigate("/");
        } catch (err) {
            alert(err.respond?.data?.message || "signup failed");
        }
    };
     return {
        <div style={{ width: "300px", margine: "100px auto"}}>
        <h2>Signup</h2>

        <form onSubmit={handelSignup}>
        <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margine:"10px 0",width: "100%"}}
        /> 

        <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margine:"10px 0",width: "100%"}}
        />

        <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setName(e.target.value)}
        style={{ display: "block", margine:"10px 0",width: "100%"}}
        />

        <button type="submit">signup</button>
        </form>

        <p>
        already have account <Link to="/signup">signup</Link>
        </p>
        </div>
     );
    }

    export deafult Signup;
    


         
     }

