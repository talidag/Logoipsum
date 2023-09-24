import "./Alcaline.scss";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";
import AlcalineCard from "../../molecules/AlcalineCard/AlcalineCard";
import acLine from "../../../assets/ac-line.svg";
import acLineSmall from "../../../assets/ac-line-small.svg";
import trophy from "../../../assets/trophy.svg";

const Alcaline = () => {
  const alcalineNormalHeading = "How development";
  const alcalineBoldHeading = "through Alcaline works";
  const alcalineData = [
    {
      index: 1,
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    },

    {
      index: 3,
      title: "Tech architecture",
      description:
        "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently",
    },
    {
      index: 5,
      title: "Code reviews",
      description:
        "Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells",
    },

    {
      index: 2,
      title: "Sprint planning",
      description:
        "Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.",
    },
    {
      index: 4,
      title: "Standups & weekly demos",
      description:
        "Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.",
    },
    {
      index: 6,
      title: "Iterative delivery",
      description:
        "We divide the implementation process into several checkpoints rather than a single deadline.",
    },
  ];
  return (
    <section className="alcaline">
      <HeadingLine
        normalText={alcalineNormalHeading}
        boldText={alcalineBoldHeading}
      />

      <div className="alcaline__dev">
        {alcalineData.map((data, index) => (
          <AlcalineCard
            {...data}
            key={data.index}
            style={index >= 3 ? { marginLeft: "5.5rem" } : {}}
          />
        ))}
      </div>
      <img src={acLine} alt="" className="ac--line" />
      <img src={acLineSmall} alt="" className="ac--line-1" />
      <img src={acLineSmall} alt="" className="ac--line-2" />
      <img src={acLineSmall} alt="" className="ac--line-3" />
      <img src={acLineSmall} alt="" className="ac--line-4" />
      <img src={acLineSmall} alt="" className="ac--line-5" />
      <img src={acLineSmall} alt="" className="ac--line-6" />
      <img src={trophy} alt="" className="ac--trophy" />
    </section>
  );
};

export default Alcaline;
