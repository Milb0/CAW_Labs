import React, { useState } from 'react';

const MainApp = () => {
  const [buttonClicks, setButtonClicks] = useState([0, 0, 0]);

  const handleButtonClick = (index) => {
    const newButtonClicks = [...buttonClicks];
    newButtonClicks[index]++;
    setButtonClicks(newButtonClicks);
  };

  return (
    <div>
      {buttonClicks.map((clicks, index) => (
        <div key={index}>
          <button onClick={() => handleButtonClick(index)}>
            Button {index + 1}
          </button>
          <p>Button #{index + 1} was clicked {clicks} times</p>
        </div>
      ))}
    </div>
  );
};

export default MainApp;
