import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    var navigate= useNavigate()
    const signUp = async (e) => {
        e.preventDefault();
    
    const req = await axios.post('https://fullstack-1-lfyl.onrender.com/signup', {
                firstName: firstname,
                lastName: lastname,
                email: email,
                password: password,
            });
            console.log("Signup successfully")
            navigate('/login')

    };

    return (
        <div>
            <form onSubmit={signUp}>
                <br/>
                <label htmlFor='firstname'>First Name:</label>
                <br/><input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} /><br /><br/>
                <label htmlFor='lastname'>Last Name:</label><br/>
                <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} /><br /><br/>
                <label htmlFor='email'>Email:</label><br/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br/>
                <label htmlFor='email'>Password:</label><br/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br/>
                <br/><button type="submit">Sign Up</button><br/>
            </form>
        </div>
    );
};

export default Signup;
