import "./SoftwareCard.scss";
import verticalLine from "../../../assets/vertical-line.svg";

const SoftwareCard = ({
  icon,
  title,
  firstP,
  secondP,
  quote,
  person,
  type,
}) => {
  const { picture, name, occupation } = person;
  return (
    <div className="software__card">
      {type === "left" && (
        <div className="software__card__right">
          <img src={icon} alt="" />
        </div>
      )}
      <div className="software__card__left">
        <h3>{title}</h3>
        <p className="sc__firstP">{firstP}</p>
        <p className="sc__secondP">{secondP}</p>
        <div className="sc__quote">
          <img src={verticalLine} alt="" className="sc__line" />
          <q>{quote}</q>
        </div>
        <div className="sc__person">
          <img src={picture} alt="" />
          <div className="sc__person__text">
            <p>{name}</p>
            <p>{occupation}</p>
          </div>
        </div>
      </div>
      {type === "right" && (
        <div className="software__card__right">
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
};

export default SoftwareCard;
