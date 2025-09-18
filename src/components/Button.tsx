import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  onClick 
}) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#00B3FF] hover:bg-[#0099FF] text-white',
    secondary: 'bg-white hover:bg-gray-100 text-[#00B3FF]',
    outline: 'border-2 border-[#00B3FF] text-[#00B3FF] hover:bg-[#00B3FF] hover:text-white'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
