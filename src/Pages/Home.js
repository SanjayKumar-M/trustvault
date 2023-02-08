import React from 'react';
import '../Styles/Nav.css';

const Home = () => {
    return (
        <div className='home'>
            <nav>
                <div className="left">Hello</div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Upload</a>
                    </li>
                    <li>
                        <a href="#">Verify</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                </ul>
                <div className="right">
                    <button>Connect</button>
                </div>
                
            </nav>
            <main>
               <h1>The Future of Notarization is Here</h1>
               <h2>Your Digital Footprint, Verified and Secured</h2>
            </main>
        </div>
    );
};

export default Home;
