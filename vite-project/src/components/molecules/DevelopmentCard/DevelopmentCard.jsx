import "./DevelopmentCard.scss";

const DevelopmentCard = ({ icon, title, description, color }) => {
  return (
    <div className="dev__card">
      <img src={icon} alt="" style={{ background: color }} />
      <div className="dev__card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DevelopmentCard;
