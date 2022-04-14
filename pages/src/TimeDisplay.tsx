import React from 'react';

const DateTimeDisplay = ({value, type, isDanger}:{ value: number, type: string, isDanger: boolean }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p >{value}</p>
      <div>{type}</div>
    </div>
  );
};

export default DateTimeDisplay;