import { useState } from "react";
import Statistics from "./components/Statistics";
import Button from "./components/Button";
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedBack = good + neutral + bad;
  const averageFeedback = (good - bad) / totalFeedBack;
  const positiveFeedback = (good / totalFeedBack) * 100;

  const increaseGoodFeedback = () => {
    setGood((prevState) => prevState + 1);
  };

  const increaseNeutralFeedBack = () => {
    setNeutral((prevState) => prevState + 1);
  };

  const increaseBadFeedBack = () => {
    setBad((prevState) => prevState + 1);
  };
  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button handleClick={increaseGoodFeedback} text={"good"} />
        <Button handleClick={increaseNeutralFeedBack} text={"neutral"} />
        <Button handleClick={increaseBadFeedBack} text={"bad"} />
      </div>

      <div style={{ marginTop: "30px" }}>
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedBack={totalFeedBack}
            averageFeedback={averageFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          "No feedback given"
        )}
      </div>
    </div>
  );
};

export default App;
