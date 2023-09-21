import "./Hero.scss";
import heroImg from "../../../assets/web-development.png";
import Button from "../../atoms/Button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>
          Great <span className="pink">software</span> is
          <span className="bold">
            {" "}
            <br></br>
            built by great <span className="pink">teams</span>
          </span>
        </h1>
        <p>
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <Button text="Let’s get started!" className="btn-purple" />
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
