import React from 'react';

import { IButtonProps } from '../types/IButton';

const Button: React.FC<IButtonProps> = ({ id, isLink, isImage, content, color, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={{ background: color }}>
      <a id={id} href={isLink} rel="noreferrer" target='_blank'>
        {isImage ? (
          <img src={`./images/${content}-brands.svg`} alt={`${content}-brands`} />
        ) : (
          <p>{content}</p>
        )}
      </a>
    </button>
  );
};

export default Button;
