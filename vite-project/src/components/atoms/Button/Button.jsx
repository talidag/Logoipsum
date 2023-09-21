import "./Button.scss";

const Button = ({ text, className }) => {
  return <button className={`btn-atom ${className}`}>{text}</button>;
};

export default Button;
