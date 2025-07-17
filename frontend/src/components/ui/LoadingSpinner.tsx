import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'white' | 'black' | 'gray';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'white' 
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'h-4 w-4';
      case 'md':
        return 'h-6 w-6';
      case 'lg':
        return 'h-8 w-8';
      default:
        return 'h-6 w-6';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'white':
        return 'border-white border-t-transparent';
      case 'black':
        return 'border-black border-t-transparent';
      case 'gray':
        return 'border-gray-400 border-t-transparent';
      default:
        return 'border-white border-t-transparent';
    }
  };

  return (
    <div
      className={`
        ${getSizeClasses()}
        ${getColorClasses()}
        animate-spin rounded-full border-2
      `}
    />
  );
};

export default LoadingSpinner;
