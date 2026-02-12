import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* SOL: LOGO */}
        <div className="footer-col footer-brand">
          <img
            src={`${process.env.PUBLIC_URL}/img/anasayfa2.png`}/* buraya logo ekleyin*/
            alt="X Yem"
            className="footer-logo"
          />
        </div>

        {/* ORTA: İLETİŞİM */}
        <div className="footer-col">
          <p className="footer-title">İletişim</p>

          <a className="footer-mail" href="mailto:xxxx@outlook.com">
            <i className="fa-solid fa-envelope"></i>
            @outlook.com
          </a>

          <div className="footer-contacts">
            <div className="contact-row">
              <span className="contact-name">kişi 1 telefon</span>
              <a className="contact-phone" href="tel:+xxxxxxxxxxx">xxxxxxx</a>
            </div>

            <div className="contact-row">
              <span className="contact-name">kişi 2 telefon</span>
              <a className="contact-phone" href="tel:+xxxxxxxxxxx">xxxxxxxx</a>
            </div>

            <div className="contact-row">
              <span className="contact-name">kişi 3 telefon</span>
              <a className="contact-phone" href="tel:+xxxxxxxxxxx">xxxxxxx</a>
            </div>

           
          </div>
        </div>

        {/* SAĞ: SOSYAL */}
        <div className="footer-col">
          <p className="footer-title">Sosyal Medya</p>

          <a
            className="social-link"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com"
          >
            <i className="fa-brands fa-instagram"></i>
            @
          </a>

           <a
               className="footer-location"
              href="https://www.google.com/İstanbul"
              target="_blank"
              rel="noreferrer"
            >
               <i className="fa-solid fa-location-dot"></i>
              Adresi buraya yazınız/İstanbul
            </a>
        </div>
      </div>

      {/* ALT BAR */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} X Yem</span>
      </div>

      {/* YUKARI ÇIK */}
      <button onClick={() => scroll.scrollToTop()} className="gotop">
        <i className="fas fa-level-up-alt"></i>
      </button>
    </footer>
  );
}

export default Footer;
