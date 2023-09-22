import "./Services.scss";
import icon1 from "../../../assets/icons/icon-1.svg";
import icon2 from "../../../assets/icons/icon-2.svg";
import icon3 from "../../../assets/icons/icon-3.svg";
import icon4 from "../../../assets/icons/icon-4.svg";
import icon5 from "../../../assets/icons/icon-5.svg";
import icon6 from "../../../assets/icons/icon-6.svg";
import icon7 from "../../../assets/icons/icon-7.svg";
import icon8 from "../../../assets/icons/icon-8.svg";
import icon9 from "../../../assets/icons/icon-9.svg";
import ServiceCard from "../../molecules/ServiceCard/ServiceCard";
import HeadingLine from "../../molecules/HeadingLine/HeadingLine";

const Services = () => {
  const servicesHeading = "Services we offer";
  const ourServices = [
    {
      icon: icon1,
      title: "Custom Software Development Services",
      text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: icon2,
      title: "Software Testing Services",
      text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: icon3,
      title: "Mobile Application Development",
      text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      icon: icon4,
      title: "Web Application Development Services",
      text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    // {
    //   icon: icon5,
    //   title: "Dedicated Software Development Team",
    //   text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    // },
    // {
    //   icon: icon6,
    //   title: "Software Product Development Services",
    //   text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    // },
    // {
    //   icon: icon7,
    //   title: "API Integration Services",
    //   text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    // },
    // {
    //   icon: icon8,
    //   title: "Application Development Services",
    //   text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    // },
    // {
    //   icon: icon9,
    //   title: "Hire Dedicated Developers",
    //   text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    // },
  ];

  return (
    <section className="services">
      <HeadingLine boldText={servicesHeading} type="none" />
      <div className="services__carousel">
        {ourServices.map((service, index) => (
          <ServiceCard {...service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;
