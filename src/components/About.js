function About() {
  return (
    <div className="container about">
      <h2 className="main-title about-h2 text-center">HAKKIMIZDA</h2>

      <div className="row">
        <div className="col-md-6 text-center">
          <img
            alt="about"
            src={`${process.env.PUBLIC_URL}/img/anasayfa2.png`}
            className="about-img"
          />
        </div>

        <div className="col-md-6 about-text">
        
          <p className="main-p">
            X Yem olarak buraya hakkımda metni gelicek.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
