import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, href, variant }) => {
  const baseStyles = "px-6 py-3 rounded-lg transition-colors";
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    outline: "border border-white hover:bg-white hover:text-gray-900 text-white"
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </a>
  );
};

export default Button;