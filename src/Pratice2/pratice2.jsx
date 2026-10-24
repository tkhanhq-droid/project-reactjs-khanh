import "./pratice2.css";
export default function Practice2() {
  return (
    <>
      <h1>My Weekend Plans</h1>
      <p>
        This weekend I'm planning to relax, catch up with friends, and get
        outside for a bit if the weather holds up.
      </p>
      <div className="box">
        <b>Saturday:</b> Farmers market in the morning, then a long walk in the
        park.
      </div>
      <div className="box">
        <b>Sunday:</b> Cook a big breakfast and watch a movie with friends.
      </div>
      <p>
        Check the forecast on{" "}
        <a href="https://weather.com/" className="color-link">
          weather.com
        </a>{" "}
        before heading out!
      </p>
    </>
  );
}
