import '../styles/card.css';

export default function Card({ img, alt, imageTitle, onClick }) {
  return (
    <button className="card-wrapper" onClick={onClick}>
      <img src={img} alt={alt} />
      <p className="card-title">{imageTitle}</p>
    </button>
  );
}
