import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const handleAboutClick = () => {
    // TODO: Implement navigation to about page
    console.log('Navigate to About');
  };

  const handleContactClick = () => {
    // TODO: Implement navigation to contact page
    console.log('Navigate to Contact');
  };

  return (
    <nav className={`flex items-center gap-8 ${className}`} role="navigation" aria-label="Main navigation">
      <button
        onClick={handleAboutClick}
        className="text-white text-center text-base font-light tracking-[1.6px] uppercase hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
        aria-label="About page"
      >
        ABOUT
      </button>
      <button
        onClick={handleContactClick}
        className="text-white text-center text-base font-light tracking-[1.6px] uppercase hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded px-2 py-1"
        aria-label="Contact us page"
      >
        CONTACT US
      </button>
    </nav>
  );
};
