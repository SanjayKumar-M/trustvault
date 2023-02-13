import React from 'react';
import '../Styles/Nav.css'
// import Connect from '../Components/Connect';

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
              <Link to="/UploadForm">Upload</Link>
            </li>
            <li>
              <Link to="/Verify">Verify</Link>
            </li>
            <li>
              <Link to="/Recent">Recent</Link>
            </li>
            {/* <li><Connect /></li> */}
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
