import React, { useState } from 'react';

const ToggleButton = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clickCount % 2 === 0 ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export default ToggleButton;
