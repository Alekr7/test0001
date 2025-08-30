import React from 'react';
import './PureSystemAnimation.css';

const PureSystemAnimation = ({ text, className = "" }) => {
  return (
    <h1 className={`puresystem-simple ${className}`}>
      {text}
    </h1>
  );
};

export default PureSystemAnimation;