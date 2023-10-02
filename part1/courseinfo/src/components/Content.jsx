import Part from "./Part";

const Content = (props) => {
  const [part1,part2,part3 ] = props.parts;
  const [ exercises1, exercises2, exercises3 ] = [props.parts[0].exercises,props.parts[1].exercises,props.parts[2].exercises];
  return (
    <div>
      <Part part={part1.name} exercise={exercises1} />
      <Part part={part2.name} exercise={exercises2} />
      <Part part={part3.name} exercise={exercises3} />
    </div>
  );
};

export default Content;
