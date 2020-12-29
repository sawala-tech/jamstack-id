import React from 'react';

const Card = ({ className, children }) => (
  <div
    className={`p-12 rounded-lg ${className}`}

  >
    {children}
  </div>
);

export default Card;
