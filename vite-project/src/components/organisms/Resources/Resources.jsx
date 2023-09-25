import "./Resources.scss";
import HeadingLine from "../../../components/molecules/HeadingLine/HeadingLine";
import ResourcesCard from "../../molecules/ResourcesCard/ResourcesCard";
import res1 from "../../../assets/res1.svg";
import res2 from "../../../assets/res2.svg";
import res3 from "../../../assets/res3.svg";
import res4 from "../../../assets/res4.svg";
import res5 from "../../../assets/res5.svg";

const Resources = () => {
  const resourcesNormalHeading = "Featured";
  const resourcesBoldHeading = "Resources";
  const resourcesCard = [
    // {
    //   icon: res1,
    //   description:
    //     "How to Build a Scalable Application up to 1 Million Users on AWS",
    // },
    {
      icon: res2,
      description:
        "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      icon: res3,
      description:
        "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      icon: res4,
      description:
        "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    // {
    //   icon: res5,
    //   description:
    //     "How to Build a Scalable Application up to 1 Million Users on AWS",
    // },
  ];
  return (
    <section className="resources">
      <HeadingLine
        normalText={resourcesNormalHeading}
        boldText={resourcesBoldHeading}
      />
      <div className="resources__card">
        {resourcesCard.map((data, index) => (
          <ResourcesCard {...data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Resources;
