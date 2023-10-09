const Total = ({ parts }) => {
  let total = 0;
  total = parts.reduce((total, obj) => total + obj.exercises, 0);

  return <p>Number of exercises {total}</p>;
};

export default Total;
