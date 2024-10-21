import React from 'react';
import Part from './Part'; 

const Content = ({ parts }) => {
  console.log('Rendering Content with parts:', parts);
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

export default Content;
