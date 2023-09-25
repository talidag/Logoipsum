import "./ResourcesCard.scss";
import rightArrow from "../../../assets/right-arrow.svg";

const ResourcesCard = ({ icon, description }) => {
  const cardSeeMore = "Read More";
  return (
    <div className="res__card">
      <img src={icon} alt="" />
      <p>{description}</p>

      <div className="r-card-more">
        <p>{cardSeeMore}</p>
        <img src={rightArrow} alt="" />
      </div>
    </div>
  );
};

export default ResourcesCard;
