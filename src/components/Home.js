import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="content">
      <h2>Welcome to My Portfolio</h2>
      <p>This is the home page of my portfolio website. You can navigate through the tabs in the navbar to learn more about me and my work.</p>
      <Link to="/about">
        <button className="btn">Learn More</button>
      </Link>
    </div>
  );
};

export default Home;
