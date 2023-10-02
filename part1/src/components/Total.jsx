const Total = ({ exerciseObj }) => {
  const { exercises1, exercises2, exercises3 } = exerciseObj;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

export default Total;
