import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <input type={props.type} className={classes.singleinput}>
      {props.children}
    </input>
  );
};

export default Input;
