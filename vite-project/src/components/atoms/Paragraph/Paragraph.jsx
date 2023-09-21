import "./Paragraph.scss";

const Paragraph = ({ text, className, span }) => {
  return <p className={`main-p ${className}`}>{text}</p>;
};

export default Paragraph;
