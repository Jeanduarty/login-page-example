import "./styles.css";

export const Button = ({
  text,
  backgroundColor,
  width,
  margin,
  color,
  fontStyle,
  fontSize,
  textAlign,
}) => {
  return (
    <button
      className="btn"
      style={{
        margin: margin,
        backgroundColor: backgroundColor,
        width: width,
        color: color,
        fontStyle: fontStyle,
        fontSize: fontSize,
        textAlign: textAlign,
      }}
    >
      {text}
    </button>
  );
};
