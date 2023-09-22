import "./TestimonialCard.scss";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import star from "../../../assets/star.svg";

const TestimonialCard = ({ icon, stars, name, title, comment }) => {
  return (
    <div className="testimonial">
      <Paragraph text={comment} className="testimonial__comment" />
      <img src={icon} alt="" />
      <div className="testimonial__rating">
        {[...Array(stars)].map((e, i) => (
          <img src={star} alt="" key={i} />
        ))}
      </div>
      <h4>{name}</h4>
      <p className="testimonial__title">{title}</p>
    </div>
  );
};

export default TestimonialCard;
