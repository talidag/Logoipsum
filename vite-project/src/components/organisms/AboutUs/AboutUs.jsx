import Heading from "../../atoms/Heading/Heading";
import MoreInfoButton from "../../atoms/MoreInfoButton/MoreInfoButton";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import "./AboutUs.scss";
import line from "../../../assets/line.svg";
import aboutVideo from "../../../assets/about-video.png";

const AboutUs = () => {
  const aboutUsHeading = "Leading companies trust us";
  const aboutUsHeadingBold = "to develop software";
  const aboutUsParagraph =
    "We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.";
  return (
    <section className="about">
      <div className="about__left">
        <img src={line} alt="" />
        <Heading text={aboutUsHeading} className="heading--normal" />
        <Heading text={aboutUsHeadingBold} className="heading--bold" />
        <Paragraph text={aboutUsParagraph} span={3} />
        <MoreInfoButton text="See more Information" />
      </div>
      <img src={aboutVideo} alt="" />
    </section>
  );
};

export default AboutUs;
