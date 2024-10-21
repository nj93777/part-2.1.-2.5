import React from 'react';

const Part = ({ name, exercises }) => {
  console.log(`Rendering Part: ${name} with ${exercises} exercises`);
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

export default Part;
