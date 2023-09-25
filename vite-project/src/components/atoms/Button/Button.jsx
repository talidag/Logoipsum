import "./Button.scss";

const Button = ({ text, className }) => {
  const handleButtonClick = () => {
    const email = "logoipsum@logoipsum.com";
    const subject = "Let's colaborate!";
    const mailtoLink = `mailto:${email}?subject=${subject}`;

    try {
      window.open(mailtoLink);
    } catch (error) {
      console.error("Error opening email client:", error);
    }
  };

  return (
    <button
      className={`btn-atom ${className}`}
      onClick={handleButtonClick}
      aria-label="Contact Us"
      role="button"
    >
      {text}
    </button>
  );
};

export default Button;
