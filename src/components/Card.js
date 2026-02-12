function Card({ title, img, text }) {
  return (
    <div className="custom-card">
      <div className="custom-card-img-wrapper">
        <img
          src={`${process.env.PUBLIC_URL}/img/${img}`}
          alt={title}
          className="custom-card-img"
        />
      </div>

      <div className="custom-card-body">
        <h5 className="custom-card-title">{title}</h5>
        <p className="custom-card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
