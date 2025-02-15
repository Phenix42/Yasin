import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className="fixed-navigation fixed w-full z-50">
      <div className="row-nav flex justify-between items-center p-6 bg-white dark:bg-black transition-colors duration-300">
        <a href="/" className="logo frost-blur px-6 py-4 rounded-full">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">M.</span>
        </a>
        <div className="hidden md:flex space-x-12">
          <a href="#articles" className="link frost-blur px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-gray-900 dark:text-white">
            PROJECTS
          </a>
          <a href="#awards" className="link frost-blur px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-gray-900 dark:text-white">
            CERTIFICATION
          </a>
          <a href="#works" className="link frost-blur px-6 py-4 rounded-full text-sm font-semibold tracking-wider text-gray-900 dark:text-white">
            WORKS
          </a>
        </div>
        <button 
          className="md:hidden frost-blur p-4 rounded-full text-gray-900 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg py-6">
          <div className="flex flex-col space-y-4 px-6">
            <a href="#articles" className="text-lg font-semibold text-gray-900 dark:text-white">ARTICLES</a>
            <a href="#awards" className="text-lg font-semibold text-gray-900 dark:text-white">AWARDS</a>
            <a href="#works" className="text-lg font-semibold text-gray-900 dark:text-white">WORKS</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
