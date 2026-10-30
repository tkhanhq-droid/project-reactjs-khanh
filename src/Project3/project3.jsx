import './project3.css';
export default function Project3() {
  return (
    <div className="project3-page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a href="" className="navbar-brand">
            Sweet Crumbs
          </a>
          <div className="ms-auto">
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Visit
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h1>
                Baked fresh,
                <br />
                every morning.
              </h1>
              <p>
                A small neighborhood bakery making sourdough, croissants, and
                pastries by hand — no shortcuts, no mixes, just flour, time, and
                a very early alarm clock.
              </p>
              <a href="#menu" className="btn btn-menu">
                {' '}
                See today's menu{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="container">
          <h2>Today's menu</h2>
          <p className="menu-description">
            Baked in small batches, so once it's gone, it's gone.
          </p>

          <div className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="product-card">
                <div className="product-icon">🍞</div>
                <h3>Country Sourdough</h3>
                <p>24-hour fermented, crackling crust, soft open crumb.</p>
                <div className="price">$7.50</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="product-card">
                <div className="product-icon">🥐</div>
                <h3>Butter Croissant</h3>
                <p>Laminated by hand over three days for extra flaky layers.</p>
                <div className="price">$4.00</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="product-card">
                <div className="product-icon">🧁</div>
                <h3>Lemon Cupcake</h3>
                <p>Light sponge with a fresh lemon curd center.</p>
                <div className="price">$3.50</div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="product-card">
                <div className="product-icon">🥧</div>
                <h3>Seasonal Fruit Tart</h3>
                <p>Whatever's ripest this week, on a shortcrust base.</p>
                <div className="price">$5.75</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="visit">
        <div className="container d-flex justify-content-between align-items-center">
          <p className="m-0">12 Elm Street · Open Tue–Sun, 7am–2pm</p>
          <p className="m-0">© 2026 Sweet Crumbs Bakery</p>
        </div>
      </footer>
    </div>
  );
}
