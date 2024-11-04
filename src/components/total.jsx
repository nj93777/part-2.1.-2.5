import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part);
    return sum + part.exercises;
  }, 0);
  console.log('Rendering Total with total exercises:', totalExercises);
  return (
    <p>Total of exercises {totalExercises}</p>
  );
};

export default Total;