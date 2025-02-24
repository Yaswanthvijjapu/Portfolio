import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-900 text-center text-gray-400 border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;