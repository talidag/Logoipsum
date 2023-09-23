import "./GreatSoftware.scss";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";
import software1 from "../../../assets/software1.png";
import software2 from "../../../assets/software2.png";
import software3 from "../../../assets/software3.png";
import person1 from "../../../assets/person1.png";
import person2 from "../../../assets/person2.png";
import person3 from "../../../assets/person3.png";
import yellowDot from "../../../assets/yellow-dot.svg";
import purpleDot from "../../../assets/purple-dot.svg";
import SoftwareCard from "../../molecules/SoftwareCard/SoftwareCard";

const GreatSoftware = () => {
  const softwareNormal = "Way of building";
  const softwareBold = "Great Software";
  const softwareData = [
    {
      icon: software1,
      title: "Build the right team to scale",
      firstP:
        "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)",
      secondP:
        "Our delivery model helps you cut costs and deliver within budget.",
      quote:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      person: { picture: person1, name: "Jeewa markram", occupation: "CEO" },
      type: "right",
    },
    {
      icon: software2,
      title: "Build the right team to scale",
      firstP:
        "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)",
      secondP:
        "Our delivery model helps you cut costs and deliver within budget.",
      quote:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      person: { picture: person2, name: "Jeewa markram", occupation: "CEO" },
      type: "left",
    },
    {
      icon: software3,
      title: "Build the right team to scale",
      firstP:
        "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers)",
      secondP:
        "Our delivery model helps you cut costs and deliver within budget.",
      quote:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      person: { picture: person3, name: "Jeewa markram", occupation: "CEO" },
      type: "right",
    },
  ];
  return (
    <section className="software">
      <img src={yellowDot} alt="" className="yellow--first" />
      <img src={yellowDot} alt="" className="yellow--second" />
      <img src={yellowDot} alt="" className="yellow--third" />
      <img src={purpleDot} alt="" className="purple--first" />
      <img src={purpleDot} alt="" className="purple--second" />
      <img src={purpleDot} alt="" className="purple--third" />

      <HeadingLine normalText={softwareNormal} boldText={softwareBold} />
      <div className="software__cards">
        {softwareData.map((data, index) => (
          <SoftwareCard {...data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default GreatSoftware;
