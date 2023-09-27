import React from 'react';

interface ButtonProps {
  text: string;
}

const MyComponent: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default ButtonProps;