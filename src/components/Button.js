import React from 'react';

const sizes = {
  default: `py-3 px-6`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};

const Button = ({ children, className = '', size }) => {
  return (
    <button
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-gradient-to-tr from-mypink to-myorange hover:bg-myorange shadow-md focus:outline-none rounded-full text-white
    `}
    >
      {children}
    </button>
  );
};

export default Button;
