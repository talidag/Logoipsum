import "./OurClients.scss";
import line from "../../../assets/line.svg";
import Heading from "../../atoms/Heading/Heading";
import logo5 from "../../../assets/logos/logo5.svg";
import logo6 from "../../../assets/logos/logo6.svg";
import logo7 from "../../../assets/logos/logo7.svg";
import logo8 from "../../../assets/logos/logo8.svg";
import logo9 from "../../../assets/logos/logo9.svg";
import circle from "../../../assets/circle.svg";
import btnLeft from "../../../assets/btn-left.svg";
import btnRight from "../../../assets/btn-left-fill.svg";

const OurClients = () => {
  const ourClientsNormal = "Meet the People";
  const ourClientsBold = " We are Working With";
  return (
    <section className="clients">
      <div className="clients__left">
        <img src={line} alt="" />
        <Heading text={ourClientsNormal} className="heading--normal" />
        <Heading text={ourClientsBold} />
      </div>

      <div className="logos">
        <div className="clients__btn">
          <img src={btnLeft} alt="" />
          <img src={btnRight} alt="" />
        </div>
        <img src={circle} alt="" className="circle-clients" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
        <img src={logo8} alt="" />
        <img src={logo9} alt="" />
      </div>
    </section>
  );
};

export default OurClients;
