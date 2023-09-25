import "./Hire.scss";
import hireBtn from "../../../assets/hire-btn.svg";

const Hire = () => {
  const hireHeading = "Hire the best developers and designers around!";
  const hireButton = "Hire Top Developers";
  return (
    <section className="hire">
      <div className="hire__container">
        <img src={hireBtn} alt="" className="hire-btn" />
        <h2>{hireHeading}</h2>
        <button>{hireButton}</button>
      </div>
    </section>
  );
};

export default Hire;
