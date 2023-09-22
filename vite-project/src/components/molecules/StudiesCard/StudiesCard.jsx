import "./StudiesCard.scss";
import smallRightArrow from "../../../assets/small-right-arrow.svg";

const StudiesCard = ({ icon, title, description, color }) => {
  const moreInfoText = "Read More";
  return (
    <div className="studies__card" style={{ backgroundColor: color }}>
      <img src={icon} alt="" />
      <div className="studies__card__text">
        <h5>{title}</h5>
        <div className="read__more__container">
          <p>{description}</p>
          <div className="more__info__studies">
            <h6>{moreInfoText}</h6>
            <img src={smallRightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudiesCard;
