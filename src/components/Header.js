

function Header() {
  return (
    <header
      className="hero"
      id="headerbg"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/anasayfa2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content hero-left">
        <h1 className="hero-title">x Yem</h1>

        <p className="hero-subtitle">
          Büyükbaş yem satışı - x Bayiliği - Güvenilir ticaret
        </p>

        <div className="hero-actions">
          <a className="hero-btn primary" href="tel:+xxxxxxxxxxx">
            <i className="fa-solid fa-phone"></i>
            Hemen Ara
          </a>

       

          <a
            className="hero-btn ghost"
            href="https://www.google.com/İstanbul"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-location-dot"></i>
            Konum
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
