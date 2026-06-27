import '../styles/card.css';

export default Card;

function Card({ img, alt, imageTitle }) {
  return (
    <div className="card-wrapper">
      <img src={img} alt={alt} />
      <p className="card-title">{imageTitle}</p>
    </div>
  );
}
