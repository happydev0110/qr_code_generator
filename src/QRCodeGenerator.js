// src/QRCodeGenerator.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text or URL"
        className="p-2 border border-gray-300 rounded mb-4 w-80"
      />
      <div className="bg-white p-4 rounded shadow">
        <QRCode value={text} size={256}/>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
