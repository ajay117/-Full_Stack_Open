const Total = ({ parts }) => {
  const [exercises1, exercises2, exercises3] = [
    parts[0].exercises,
    parts[1].exercises,
    parts[2].exercises,
  ];
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

export default Total;
