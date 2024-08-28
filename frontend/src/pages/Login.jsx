import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/accounts/login/', {
                username,
                password,
            });
            console.log(response.data);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            localStorage.setItem('username', username); // Store username in localStorage

            // Navigate to the home page after successful login
            navigate('/Home2', { state: { username } });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;


