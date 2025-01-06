import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    var navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();
        var req = await axios.post("https://fullstack-1-lfyl.onrender.com/login", {
            email, password
        });
        console.log(req.data)
        var isLoginSuccessfully = req.data.isLoggedIn;
        console.log(isLoginSuccessfully);
        if (isLoginSuccessfully) {
            navigate('/slowfunction')
        }
        else {

            var message = req.data.message;
            console.log(message);
            alert(message);
        }

    }
    return (
        <div>
            <form onSubmit={login} >
                <br />
                <label htmlFor="email">email:</label><br />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
                <label htmlFor="password">password:</label><br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <br /><button type="submit">Login</button><br />
            </form>
        </div>
    );
};

export default Login;
