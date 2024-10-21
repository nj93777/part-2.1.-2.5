import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log('Rendering Total with total exercises:', totalExercises);
  return (
    <p>Number of exercises {totalExercises}</p>
  );
};

export default Total;
