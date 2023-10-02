import React from 'react';

function CsrfVulnerability() {
  const handleCSRF = () => {
    // Simulate a CSRF vulnerability by making an unauthorized action
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/change-email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({ email: 'attacker@example.com' }));
  };

  return (
    <div>
      <h1>CSRF Vulnerability</h1>
      <button onClick={handleCSRF}>Change Email (Vulnerable)</button>
    </div>
  );
}

export default CsrfVulnerability;
