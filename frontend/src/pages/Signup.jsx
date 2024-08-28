
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:8000/api/accounts/signup/', {
              username,
              email,
              password,
          });
          console.log(response.data);
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
          />
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
          />
          <button type="submit">Sign Up</button>
      </form>
  );
};

export default Signup;
