import React from 'react';

interface IButton {
  content?: string;
  btnType?: string;
  color?: string;
  onClick?: () => void;
}

const Buttom: React.FC<any> = ({ isImage, content, color, onClick }) => {
  return (
    <button className="btn" onClick={onClick} style={{ background: color }}>
      {isImage ? (
        <img src={`./images/${content}-brands.svg`} alt={`${content}-brands`} />
      ) : (
        content
      )}
    </button>
  );
};

export default Buttom;
