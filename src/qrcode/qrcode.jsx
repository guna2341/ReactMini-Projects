import React, { useState } from 'react';
import './qrcode.css';

const Qrcode = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  return (
    <div className="container">
      <input
        className="input-box"
        placeholder="Enter text or URL"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="generate-button" onClick={() => setCode(input)}>
        Generate QR Code
      </button>

      {code && (
        <div className="qr-container">
          <img
            className="qr-code"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${code}`}
            alt="QR Code"
          />
        </div>
      )}
    </div>
  );
};

export default Qrcode;
