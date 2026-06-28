import '../styles/card.css';

export default Card;

function Card({ img, alt, imageTitle, onClick }) {
  return (
    <div className="card-wrapper" onClick={onClick}>
      <img src={img} alt={alt} />
      <p className="card-title">{imageTitle}</p>
    </div>
  );
}
