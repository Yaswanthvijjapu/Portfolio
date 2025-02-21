import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900/80 text-center text-gray-400">
      <p>© {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
    </footer>
  );
};

export default Footer;