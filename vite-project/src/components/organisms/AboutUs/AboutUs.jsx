import Heading from "../../atoms/Heading/Heading";
import MoreInfoButton from "../../atoms/MoreInfoButton/MoreInfoButton";
import "./AboutUs.scss";

const AboutUs = () => {
  const aboutUsHeading = "Leading companies trust us";
  const aboutUsHeadingBold = "to develop software";
  const aboutUsParagraph =
    "We add development capacity to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.";
  return (
    <section className="about">
      <Heading text={aboutUsHeading} className="heading--normal" />
      <Heading text={aboutUsHeadingBold} className="heading--bold" />
      <p>{aboutUsParagraph}</p>
      <MoreInfoButton text="See more Information" />
    </section>
  );
};

export default AboutUs;
