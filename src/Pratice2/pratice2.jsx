import './pratice2.css';
function Practice2() {
  return (
    <div className="practice2-page">
      <div className="practice2-content">
        <h1>My Weekend Plans</h1>

        <p>
          This weekend I'm planning to relax, catch up with friends, and get
          outside for a bit if the weather holds up.
        </p>

        <div className="box">
          <strong>Saturday:</strong> Farmers market in the morning, then a long
          walk in the park.
        </div>

        <div className="box">
          <strong>Sunday:</strong> Cook a big breakfast and watch a movie with
          friends.
        </div>

        <p>
          Check the forecast on{' '}
          <a className="color-link" href="https://weather.com">
            weather.com
          </a>{' '}
          before heading out!
        </p>
      </div>
    </div>
  );
}

export default Practice2;
