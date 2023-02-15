import React from 'react';
import '../Styles/Nav.css'
import Connect from '../Components/Connect';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Link to="/Home" style={{ textDecoration: 'none' }}>
            <img src="/" style={{ cursor: 'pointer' }} alt="Quasar logo" />
          </Link>
        </div>

        <div className="side">
          <ul>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/verify">Verify</Link>
            </li>
            <li>
              <Link to="/recent">Recent</Link>
            </li>
            <li><Connect /></li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1>Decentralized Notary Service</h1>
      </div>
    </div>
  );
};

export default Home;
