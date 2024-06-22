import React from 'react';

const Favorites = () => {
  return (
    <div className="min-h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

      <div className="z-10 text-white text-center w-full">
        <img src="/logo.png" alt="Logo" className="h-16 w-auto mx-auto mb-4" />
        <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
        <p className="text-lg">Stay tuned for this feature!!!</p>
      </div>
    </div>
  );
};

export default Favorites;
