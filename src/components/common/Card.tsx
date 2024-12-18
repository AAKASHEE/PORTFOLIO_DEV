import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
};

export default Card;