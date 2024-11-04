import React from 'react';

const Header = ({ course }) => {
  return <h1 style={{ fontSize: '20px' }}>{course}</h1>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => {
    console.log('what is happening', sum, part);
    return sum + part.exercises;
  }, 0);
  console.log('Rendering Total with total exercises:', totalExercises);
  return (
    <b> <p>Number of exercises {totalExercises}</p></b>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;