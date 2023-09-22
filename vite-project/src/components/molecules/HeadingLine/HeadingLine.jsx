import "./HeadingLine.scss";
import line from "../../../assets/line.svg";

const HeadingLine = ({ normalText, boldText, type }) => {
  return (
    <div
      className="heading__line"
      style={type === "left" ? { textAlign: "left" } : {}}
    >
      {type !== "none" ? (
        <>
          <img src={line} alt="" />
          <h2 className="main-h heading--normal">{normalText}</h2>
          <h2 className="main-h heading--bold">{boldText}</h2>
        </>
      ) : (
        <h2 className="main-h heading--bold">{boldText}</h2>
      )}
    </div>
  );
};

export default HeadingLine;
