import "./Heading.scss";

const Heading = ({ text, className }) => {
  return <h2 className={className}>{text}</h2>;
};

export default Heading;
