import React from 'react';
import Button from '../../CommonComponent/Button';

const Signup = () => {
  const data = ['Teacher', 'Parent'];
  return (
    <div>
      {data.map(el => (
        <Button value={el} className="button-input" />
      ))}
    </div>
  );
};

export default Signup;
