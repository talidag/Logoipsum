import "./AlcalineCard.scss";

const AlcalineCard = ({ index, title, description, className, style }) => {
  return (
    <div className="ac" style={style}>
      <div className="ac__title">
        <h4 className="ac__title__index">#{index}</h4>
        <h4 className="ac__title__heading">{title}</h4>
      </div>
      <div className="ac__description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AlcalineCard;
