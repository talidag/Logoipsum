import "./TechStack.scss";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";
import tsBe1 from "../../../assets/ts-backend1.svg";
import tsBe2 from "../../../assets/ts-backend2.svg";
import tsBe3 from "../../../assets/ts-backend3.svg";
import tsBe4 from "../../../assets/ts-backend4.svg";
import tsBe5 from "../../../assets/ts-backend5.svg";
import tsBe6 from "../../../assets/ts-backend6.svg";
import tsBe7 from "../../../assets/ts-backend7.svg";
import tsBe8 from "../../../assets/ts-backend8.svg";
import tsBe9 from "../../../assets/ts-backend9.svg";

const TechStack = () => {
  const techNormalHeading = "Our";
  const techBoldHeading = "Tech Stack";
  const techData = [
    {
      type: "Backend",
      stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8, tsBe9],
    },
    // {
    //   type: "Frontend",
    //   stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8],
    // },
    // {
    //   type: "Databases",
    //   stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8],
    // },
    // {
    //   type: "CMS",
    //   stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8],
    // },
    // {
    //   type: "CloudTesting",
    //   stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8],
    // },
    // {
    //   type: "DevOps",
    //   stacks: [tsBe1, tsBe2, tsBe3, tsBe4, tsBe5, tsBe6, tsBe7, tsBe8],
    // },
  ];
  return (
    <section className="tech">
      <HeadingLine normalText={techNormalHeading} boldText={techBoldHeading} />
      <div className="tech__stacks">
        {techData.map((data, index) => {
          const { type, stacks } = data;
          return (
            <>
              <p key={index}>{type}</p>
              <div className="tech__stacks__img">
                {stacks.map((stack) => (
                  <img src={stack} alt="" />
                ))}
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default TechStack;
