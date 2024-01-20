import React, { useState } from 'react';

const DynamicDivForm = () => {
  const [newDivStyle, setNewDivStyle] = useState({
    height: '',
    width: '',
    backgroundColor: '',
  });

  const [generatedDiv, setGeneratedDiv] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDivStyle((prevStyle) => ({ ...prevStyle, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { height, width, backgroundColor } = newDivStyle;

    if (height && width && backgroundColor) {
      const divStyle = {
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor,
      };

      setGeneratedDiv(<div style={divStyle}></div>);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Height:
          <input
            type="number"
            name="height"
            value={newDivStyle.height}
            onChange={handleInputChange}
            placeholder="Enter height"
          />
        </label>
        <br />
        <label>
          Width:
          <input
            type="number"
            name="width"
            value={newDivStyle.width}
            onChange={handleInputChange}
            placeholder="Enter width"
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            name="backgroundColor"
            value={newDivStyle.backgroundColor}
            onChange={handleInputChange}
            placeholder="Enter background color"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {generatedDiv}
    </div>
  );
};

export default DynamicDivForm;
