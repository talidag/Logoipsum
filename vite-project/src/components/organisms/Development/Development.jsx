import "./Development.scss";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";
import DevelopmentCard from "../../molecules/DevelopmentCard/DevelopmentCard";
import rocket from "../../../assets/rocket.svg";
import heart from "../../../assets/heart.svg";
import check from "../../../assets/check.svg";
import code from "../../../assets/code.svg";
import lock from "../../../assets/lock.svg";
import shield from "../../../assets/shield.svg";

const Development = () => {
  const devNormalHeading = "Our design and";
  const devBoldHeadidng = "development approach";
  const devData = [
    {
      icon: rocket,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
    },
    {
      icon: heart,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",
    },
    {
      icon: code,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
    },
    {
      icon: check,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
    },
    {
      icon: shield,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",
    },
    {
      icon: lock,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    },
  ];
  return (
    <section className="development">
      <HeadingLine normalText={devNormalHeading} boldText={devBoldHeadidng} />
      <div className="development__cards">
        {devData.map((data, index) => (
          <DevelopmentCard {...data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Development;
