import React from 'react';

const DisplayTab = ({ table, onItemClick }) => {
  return (
    <ul>
      {table.map((item, index) => (
        <li key={index} onClick={() => onItemClick(index + 1)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTab;