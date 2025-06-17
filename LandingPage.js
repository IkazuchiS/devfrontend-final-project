import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className="landing">
            <h1>Welcome to Plant Haven</h1>
            <p>Your one-stop shop for beautiful houseplants.</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
