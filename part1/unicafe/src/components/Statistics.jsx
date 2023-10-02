const Statistics = ({
  good,
  bad,
  totalFeedBack,
  neutral,
  averageFeedback,
  positiveFeedback,
}) => {
  return (
    <>
      <p style={{ fontWeight: "600", fontSize: "25px" }}>statistics</p>

      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{totalFeedBack}</td>
          </tr>
          <tr>
            <td>averageFeedback</td>
            <td>{averageFeedback}</td>
          </tr>
          <tr>
            <td>positiveFeedback</td>
            <td>{positiveFeedback}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
