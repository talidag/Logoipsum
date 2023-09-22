import "./CaseStudies.scss";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";
import line from "../../../assets/line.svg";
import cs1 from "../../../assets/cs1.png";
import cs2 from "../../../assets/cs2.png";
import cs3 from "../../../assets/cs3.png";
import upArrow from "../../../assets/up-arrow.svg";
import downArrow from "../../../assets/down-arrow.svg";
import smallCircle from "../../../assets/small-circle.svg";
import StudiesCard from "../../molecules/StudiesCard/StudiesCard";
import mediumRightArrow from "../../../assets/medium-arrow-right.svg";

const CaseStudies = () => {
  const studiesHeading = "Our recent";
  const studiesHeadingBold = "Case studies";
  const studiesData = [
    {
      icon: cs1,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      color: "#F1F2FF",
    },
    {
      icon: cs2,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      color: "#F0FFF7",
    },
    {
      icon: cs3,
      title: "Website Design for SCFC Canada",
      description:
        "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
      color: "#FFF4F4",
    },
  ];
  const moreInfoBottom = "Read more case studies";

  return (
    <section className="studies">
      <img src={upArrow} alt="" className="up__arrrow" />
      <img src={downArrow} alt="" className="down__arrrow" />
      <img src={smallCircle} alt="" className="small__circle" />
      <HeadingLine normalText={studiesHeading} boldText={studiesHeadingBold} />
      <div className="studies__cards">
        {studiesData.map((data, index) => (
          <StudiesCard {...data} key={index} />
        ))}
      </div>
      <div className="more__info__bottom">
        <h6>{moreInfoBottom}</h6>
        <img src={mediumRightArrow} alt="" />
      </div>
    </section>
  );
};

export default CaseStudies;
