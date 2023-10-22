import React from 'react';
const HomePage = () => {
    return (
        <div className="text-center">
            <h1 className="hero-img w-100 mt-5 position-absolute">Home</h1>
            <img className="w-100" src={process.env.PUBLIC_URL + '/hero-img.jpg'} alt="Hero img" />
        </div>
    );
};

export default HomePage;
