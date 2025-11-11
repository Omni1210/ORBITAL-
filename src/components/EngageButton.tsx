import React, { useState } from 'react';

interface EngageButtonProps {
  className?: string;
  onClick?: () => void;
}

export const EngageButton: React.FC<EngageButtonProps> = ({ className = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action - could navigate to engagement page
      console.log('Engage button clicked');
    }
  };

  const ArrowIcon = () => (
    <svg
      className="arrow-icon"
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '38px',
        height: '38px',
        flexShrink: 0,
        transition: 'transform 0.2s ease-in-out'
      }}
    >
      <path d="M0.707028 38.7071L19.707 19.7071L0.707031 0.70709" stroke="black" strokeWidth="2"></path>
      <path d="M19.707 38.7071L38.707 19.7071L19.707 0.70709" stroke="black" strokeWidth="2"></path>
    </svg>
  );

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex w-[581px] h-[68px] justify-between items-center border px-[25px] py-[15px] rounded-[10px] border-solid border-black cursor-pointer hover:bg-black hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 max-md:w-3/5 max-sm:w-[calc(100%_-_40px)] ${className}`}
      aria-label="Engage with Project Mayari"
      role="button"
    >
      <span className="text-black text-center text-[32px] italic font-light tracking-[3.2px] uppercase max-sm:text-2xl hover:text-white transition-colors duration-200">
        ENGAGE
      </span>
      <div 
        className={`transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}
        style={{ filter: isHovered ? 'invert(1)' : 'none' }}
      >
        <ArrowIcon />
      </div>
    </button>
  );
};
