import React, { useState } from 'react';

const ClickMeButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
      <p>{clicked ? 'Clicked' : ''}</p>
    </div>
  );
};

export default ClickMeButton;
