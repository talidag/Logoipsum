import Paragraph from "../../atoms/Paragraph/Paragraph";
import "./AboutUs.scss";
import aboutVideo from "../../../assets/about-video.png";
import circle from "../../../assets/circle.svg";
import rightArrow from "../../../assets/right-arrow.svg";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";

const AboutUs = () => {
  const aboutUsHeading = "Leading companies trust us";
  const aboutUsHeadingBold = "to develop software";
  const aboutUsParagraph =
    "We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.";
  const moreInfoBtn = "See more Information";
  return (
    <section className="about">
      <div className="about__left">
        <HeadingLine
          normalText={aboutUsHeading}
          boldText={aboutUsHeadingBold}
          type="left"
        />
        <Paragraph text={aboutUsParagraph} />
        <div className="moreBtn">
          <p>{moreInfoBtn}</p>
          <img src={rightArrow} alt="" />
        </div>
      </div>
      <img src={aboutVideo} alt="" />
      <img src={circle} alt="" className="circle-about" />
    </section>
  );
};

export default AboutUs;
