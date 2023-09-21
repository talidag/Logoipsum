import "./ServiceCard.scss";
import circle from "../../../assets/icons/circle.svg";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="service__card">
      <div className="card__circle">
        <img src={circle} alt="" />
        <img src={icon} alt="" className="card__icon" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default ServiceCard;
