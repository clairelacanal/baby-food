import React, { useState } from 'react';

const RandomPasswordGenerator = () => {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const passwordLength = 10;
    let generatedPassword = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div>
      <h2>Random Password Generator</h2>
      <button onClick={generatePassword}>Generate Password</button>
      {password && <p>{password}</p>}
    </div>
  );
};

export default RandomPasswordGenerator;