import "./MoreInfoButton.scss";
import rightArrow from "../../../assets/right-arrow.svg";

const MoreInfoButton = ({ text }) => {
  return (
    <div className="moreBtn">
      <p>{text}</p>
      <img src={rightArrow} alt="" />
    </div>
  );
};

export default MoreInfoButton;
