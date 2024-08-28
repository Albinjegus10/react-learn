import React from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    const username = location.state?.username || localStorage.getItem('username'); // Get username from state or localStorage

    return (
        <div>
            <h1>Welcome, {username}!</h1>
            <p>This is your home page.</p>
        </div>
    );
};

export default Home;
