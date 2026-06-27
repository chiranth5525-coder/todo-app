import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelSignup = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:5000/api/signup", {
                name,
                email,
                password,
            });

            alert("Signup successful");
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div style={{ width: "300px", margin: "100px auto" }}>
            <h2>Signup</h2>

            <form onSubmit={handelSignup}>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ display: "block", margin: "10px 0", width: "100%" }}
                />

                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ display: "block", margin: "10px 0", width: "100%" }}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ display: "block", margin: "10px 0", width: "100%" }}
                />

                <button type="submit">Signup</button>
            </form>

            <p>
                Already have an account? <Link to="/">Login</Link>
            </p>
        </div>
    );
}

export default Signup;