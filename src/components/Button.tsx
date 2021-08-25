import React from 'react';

interface IButton {
  content: string;
  onClick: () => void;
}

const Buttom: React.FC<IButton> = ({ content, onClick }) => (
  <button onClick={onClick}>{content}</button>
);

export default Buttom;
