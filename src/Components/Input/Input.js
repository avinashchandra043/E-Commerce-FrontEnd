import React, { useRef } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  formGroup: {
    position: "relative",
    padding: "15px 0 0",
    marginTop: "10px",
    width: "100%",
  },
  formField: {
    fontFamily: "inherit",
    width: "100%",
    border: "0",
    borderBottom: "2px solid #9b9b9b",
    outline: "0",
    fontSize: "1.3rem",
    padding: "7px 10px 0px 10px",
    background: "transparent",
    transition: "border-color 0.2s",
    "&:focus": {
      paddingBottom: "6px",
      fontWeight: "700",
      borderWidth: "3px",
      borderImage: "linear-gradient(to right, #11998e, #38ef7d)",
      borderImageSlice: "1",
      "& ~ $formLabel": {
        position: "absolute",
        top: "0",
        display: "block",
        transition: "0.2s",
        fontSize: "1rem",
        color: "#11998e",
        fontWeight: "700",
      },
    },
    "&::placeholder": {
      color: "transparent",
    },
    "&:placeholder-shown + $formLabel": {
      fontSize: "1.3rem",
      cursor: "text",
      top: "20px",
    },
  },
  formLabel: {
    position: "absolute",
    top: "0",
    display: "block",
    transition: "0.2s",
    fontSize: "1rem",
    color: "#9b9b9b",
    paddingLeft: "10px",
    "&:focus": {
      position: "absolute",
      top: "0",
      display: "block",
      transition: "0.2s",
      fontSize: "1rem",
      color: "#11998e",
      fontWeight: "700",
    },
  },
});
const Input = ({
  label,
  type,
  placeholder,
  id,
  required = true,
  changeHandler,
}) => {
  // const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // const showPasswordHandler = (e) => {
  //   e.stopPropagation();
  //   setShowPassword(!showPassword);
  // };

  // useEffect(() => {
  //   if (showPassword) inputRef.current.type = "text";
  //   else inputRef.current.type = "password";
  // }, [showPassword]);

  return (
    <div
      className={`${classes.formGroup} ${classes.field}`}
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type={type}
        className={classes.formField}
        placeholder={placeholder}
        name={label}
        id={id}
        onChange={(e) => {
          changeHandler(e.target.value);
        }}
        required
      />
      <label for={label} className={classes.formLabel}>
        {placeholder} {required && <sup>*</sup>}
      </label>
    </div>
  );
};

export default Input;
