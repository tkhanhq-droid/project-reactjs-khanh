import './project2.css';
export default function Project2() {
  return (
    <div className="project2-page">
      <div className="box">
        <div className="row">
          <div className="col-5 left">
            <div className="emoji">🥐</div>
            <h3>Order ahead, skip the line.</h3>
            <p>
              Tell us what you're craving and when you'd like it, and it'll be
              waiting warm at the counter — or on your doorstep.
            </p>
          </div>
          <div className="col-7 right">
            <p>Full name</p>
            <input type="text" placeholder="Jamie Rivera" />
            <p>Email</p>
            <input type="text" placeholder="jamie@example.com" />
            <p>Pickup or delivery?</p>
            <select className="form-select" aria-label="Default select example">
              <option value="pickup">Pickup</option>
              <option value="1">One</option>
              <option value="2">Two</option>
            </select>
            <p>Favorite treat</p>
            <label>
              <input type="radio" name="treat" value="croissant" />
              Croissant
            </label>

            <label>
              <input type="radio" name="treat" value="sourdough" />
              Sourdough
            </label>

            <label>
              <input type="radio" name="treat" value="cupcake" />
              Cupcake
            </label>
            <p>Notes (optional)</p>
            <textarea
              className="form-control exampleTextarea"
              rows="3"
              placeholder="Any allergies or special requests?"
            ></textarea>
            <input
              type="checkbox"
              className="form-check-input exampleCheck1 "
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Sign me up for the weekly newsletter
            </label>
            <button type="button">Place order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
