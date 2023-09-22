import "./OurCustomers.scss";
import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import cust1 from "../../../assets/cust1.svg";
import cust2 from "../../../assets/cust2.svg";
import cust3 from "../../../assets/cust3.svg";
import cust4 from "../../../assets/cust4.svg";
import cust5 from "../../../assets/cust5.svg";
import line from "../../../assets/line.svg";
import comma from "../../../assets/comma.svg";
import btnLeft from "../../../assets/btn-left.svg";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";

const OurCustomers = () => {
  const ourCustomersHeading = "Why customers love";
  const ourCustomersHeadingBold = "working with us";
  const customersData = [
    {
      icon: cust3,
      stars: 5,
      name: "Romeena De Silva",
      title: "Janet Cosmetics",
      comment:
        "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    },
    // {
    //   icon: cust2,
    //   stars: 4,
    //   name: "Romeena De Silva",
    //   title: "Janet Cosmetics",
    //   comment:
    //     "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    // },
    // {
    //   icon: cust1,
    //   stars: 5,
    //   name: "Romeena De Silva",
    //   title: "Janet Cosmetics",
    //   comment:
    //     "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    // },
    // {
    //   icon: cust4,
    //   stars: 5,
    //   name: "Romeena De Silva",
    //   title: "Janet Cosmetics",
    //   comment:
    //     "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    // },
    // {
    //   icon: cust5,
    //   stars: 4,
    //   name: "Romeena De Silva",
    //   title: "Janet Cosmetics",
    //   comment:
    //     "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    // },
  ];

  return (
    <section className="customers">
      <img src={btnLeft} alt="" className="left__btn" />
      <img src={comma} alt="" className="left__comma" />
      <HeadingLine
        normalText={ourCustomersHeading}
        boldText={ourCustomersHeadingBold}
      />
      <div className="testimonials">
        {customersData.map((testimonial, index) => (
          <TestimonialCard {...testimonial} key={index} />
        ))}
      </div>
      <img src={comma} alt="" className="right__comma" />
      <img src={btnLeft} alt="" className="right__btn" />
    </section>
  );
};

export default OurCustomers;
