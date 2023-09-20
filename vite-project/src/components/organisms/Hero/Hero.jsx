import "./Hero.scss";
import heroImg from "../../../assets/web-development.png";

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
        <button>Let’s get started!</button>
      </div>
      <div className="hero__image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
