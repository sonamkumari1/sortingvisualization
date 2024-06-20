import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <img
        src="https://reactjs-sorting-visualizer.vercel.app/logo.png"
        className="max-w-lg mb-6 mt-10"
        style={{ width: '100%' }} 
        alt="React Sorting Visualizer Logo"
      />
    </header>
  );
};

export default Header;
