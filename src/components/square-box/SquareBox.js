import React, { useState } from 'react';
import './squarebox.css';

const Square = ({ size, level }) => {
  const [isSplit, setIsSplit] = useState(false);

  const handleClick = () => {
    setIsSplit(true);
  };

  if (level === 0 || !isSplit) {
    return (
      <div
        className="square"
        style={{ width: size, height: size }}
        onClick={handleClick}
      ></div>
    );
  }

  const newSize = size / 2;

  return (
    <div className="square-container" style={{ width: size, height: size }}>
      <Square size={newSize} level={level - 1} />
      <Square size={newSize} level={level - 1} />
      <Square size={newSize} level={level - 1} />
      <Square size={newSize} level={level - 1} />
    </div>
  );
};

const SquareGrid = () => {
  return (
    <div className="recursive-square-wrapper">
      <Square size={400} level={5} />
    </div>
  );
};

export default SquareGrid;
