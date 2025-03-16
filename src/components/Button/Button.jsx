import scss from "./Button.module.scss";

const Button = ({ action, text }) => {
  return (
      <button className={scss.button} onClick={() => action()}>{text}</button>
  )
  
};

export default Button;
