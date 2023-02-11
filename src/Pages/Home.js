import React from 'react';
import '../Styles/Nav.css'
const Home = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <a href="Home.html" style={{ textDecoration: 'none' }}>
            <img src="/" style={{ cursor: 'pointer' }} alt="Quasar logo" />
          </a>
        </div>

        <div className="side">
          <ul>
            <li><a href="/">Upload</a></li>
            <li><a>Verify</a></li>
            <li><a>Recent</a></li>
            <li><a href="index.html">Connect wallet</a></li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1>This is the Home page</h1>
      </div>
    </div>
  );
};

export default Home;
