import React from 'react';
import SocialLinks from './common/SocialLinks';
import NavLinks from './common/NavLinks';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <SocialLinks />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;