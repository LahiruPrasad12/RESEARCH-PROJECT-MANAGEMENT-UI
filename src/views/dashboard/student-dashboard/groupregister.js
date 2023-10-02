import React, { useState } from 'react';

function XssVulnerableComponent() {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1>XSS Vulnerable Component</h1>
      <p>User Input: {userInput}</p> {/* Intentional XSS vulnerability */}
      <input type="text" onChange={handleInputChange} />
    </div>
  );
}

export default XssVulnerableComponent;
