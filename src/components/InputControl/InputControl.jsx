import styles from "./InputControl.module.css";
import propTypes from "prop-types";

export default function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input
        type={props.type || "text"}
        autoComplete={props.autocomplete}
        {...props}
      />
    </div>
  );
}

InputControl.propTypes = {
  label: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  autocomplete: propTypes.string,
  type: propTypes.string,
};
