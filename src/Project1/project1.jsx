import "./project1.css";
export default function Project1() {
  return (
    <>
      <div className="box">
        <div className="row">
          <div className="col-4">
            <div className="emoji">👨‍🍳</div>
          </div>
          <div className="col-8">
            <h1>Hi, I'm Marta</h1>
            <p className="note">Owner & head baker, Sweet Crumbs Bakery</p>
            <p>
              I've been baking since I was nine, when my grandmother let me
              shape my first loaf of sourdough. Ten years ago I turned that
              habit into a tiny bakery on the corner of Elm Street — everything
              is still mixed, shaped, and baked by hand, every single morning.
            </p>
            <h4>What I bake</h4>
            <ul>
              <li>Sourdough loaves, baked in small batches</li>
              <li>Butter croissants, laminated by hand</li>
              <li>Seasonal fruit tarts</li>
            </ul>
            <button type="button" className="btn-insta">
              Follow on Instagram
            </button>
            <button type="button" className="btn-email">
              Send an email
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
