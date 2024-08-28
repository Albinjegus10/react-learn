import React from 'react';
import './HomePage.css'; // Add a CSS file for styling

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <h1>Welcome to My React App</h1>
        <p>Your journey to awesome web experiences starts here!</p>
      </header>
      <main className="homepage-main">
        <section className="homepage-section">
          <h2>About Us</h2>
          <p>This is a sample React application demonstrating the basics of React.</p>
        </section>
        <section className="homepage-section">
          <h2>Features</h2>
          <ul>
            <li>Feature 1: Fast and Responsive</li>
            <li>Feature 2: Scalable Architecture</li>
            <li>Feature 3: Easy to Customize</li>
          </ul>
        </section>
        <section className="homepage-section">
          <h2>Contact Us</h2>
          <p>Email: contact@myapp.com</p>
        </section>
      </main>
      <footer className="homepage-footer">
        <p>&copy; 2024 My React App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

