import Part from "./Part";

const Content = ({ parts }) => {
  const part = parts.map((obj, index) => {
    return <Part key={index} part={obj.name} exercise={obj.exercises} />;
  });
  return <div>{part}</div>;
};

export default Content;
