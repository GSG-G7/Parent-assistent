import React from 'react';
import Button from '../../CommonComponent/Button';

const Sinup = () => {
  const data = ['Teacher', 'Parent'];
  return (
    <div className="container">
      {data.map(el => (
        <Button value={el} className="button-input" />
      ))}
    </div>
  );
};

export default Sinup;
