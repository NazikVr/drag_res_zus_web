import scss from "./Button.module.scss";

const Button = ({ action, text, color }) => {
  
  return (
      <button className={`${scss.button} ${scss[color] || ''}`}   onClick={() => action()}>{text}</button>
  )
  
};

export default Button;
