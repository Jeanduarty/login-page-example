import "./styles.css";

export const TextField = ({type,text}) => {
  return (
    <label class="textfield-filled">
      <input type={type} placeholder=" " />
      <span>{text}</span>
    </label>
  );
};
