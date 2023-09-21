import "./Hero.scss";
import heroImg from "../../../assets/web-development.png";
import Button from "../../atoms/Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import circle from "../../../assets/circle.svg";

const Hero = () => {
  const heroParagraph =
    "We help build and manage a team of world-class developers to bring your vision to life";
  const heroBtnText = "Let’s get started!";
  return (
    <section className="hero">
      <img src={circle} alt="" className="circle-hero" />
      <div className="hero__text">
        <h1>
          Great <span className="pink">software</span> is
          <span className="bold">
            {" "}
            <br></br>
            built by great <span className="pink">teams</span>
          </span>
        </h1>
        <Paragraph text={heroParagraph} className="gray700" />
        <Button text={heroBtnText} className="btn-purple" />
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
