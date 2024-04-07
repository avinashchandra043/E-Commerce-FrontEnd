import React, { useState } from "react";
import "./Auth.css";
import { createUseStyles } from "react-jss";
import { themeColor, webFontSize } from "../../../Data";
import Input from "../../../Components/Input";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../../Action/authAction";

const useStyle = createUseStyles({
  ...webFontSize,
  inputField: {
    maxWidth: "380px",
    width: "100%",
    background: themeColor.inputFieldBackground,
    display: "flex",
    justifyContent: "center",
  },
  inputFieldGroup: {
    maxWidth: "380px",
    width: "100%",
    display: "flex",
    gap: "20px",
  },
  socialIcon: {
    height: "46px",
    width: "46px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0.45rem",
    color: "#333",
    borderRadius: "50%",
    border: "1px solid #333",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "0.3s",
    cursor: "pointer",
    "&:hover": {
      color: themeColor.websiteTheme,
    },
  },
  container: {
    "&:before": {
      backgroundColor: themeColor.websiteTheme,
    },
  },
});

function SignInSignUpForm() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    signInEmail: "",
    signUpEmail: "",
    signInPassword: "",
    signUpPassword: "",
  });
  const navigate = useNavigate();
  const classes = useStyle();

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const prevPage = () => {
    navigate(-1);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: data.signInEmail,
      password: data.signInPassword,
    };
    const res = await login(userData);
    if (res) {
      prevPage();
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.signUpEmail,
      password: data.signUpPassword,
    };
    const res = await register(userData);
    if (res) {
      prevPage();
    }
  };

  return (
    <div
      className={`container ${classes.container} ${
        isSignUpMode ? "sign-up-mode" : ""
      }`}
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form
            action="#"
            className="sign-in-form"
            onSubmit={handleSignInSubmit}
          >
            <div className={classes.boldHeading}>Sign in</div>
            <div className={classes.inputField}>
              <Input
                lable="Email"
                type="email"
                placeholder="Email"
                id="registerEmail"
                changeHandler={(val) => {
                  setData({ ...data, signInEmail: val });
                }}
                required
              />
            </div>
            <div className={classes.inputField}>
              <Input
                lable="Password"
                type="password"
                placeholder="Password"
                id="registerPassword"
                changeHandler={(val) => {
                  setData({ ...data, signInPassword: val });
                }}
                required
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: "0.8rem 0",
                bgcolor: themeColor.buttonColor,
                maxWidth: "180px",
                ":hover": {
                  bgcolor: themeColor.buttonHoverColor,
                },
                ":active": {
                  bgcolor: themeColor.buttonHoverColor,
                },
              }}
            >
              Login
            </Button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <div className={classes.socialIcon}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className={classes.socialIcon}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className={classes.socialIcon}>
                <GoogleIcon />
              </div>
              <div className={classes.socialIcon}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <div className="loginSignup">
              <div>If you don't have account?</div>
              <div onClick={handleSignUpClick}>
                <u>Register</u>
              </div>
            </div>
          </form>
          <form
            action="#"
            className="sign-up-form"
            onSubmit={handleSignUpSubmit}
          >
            <div className={classes.boldHeading}>Sign up</div>
            <div className={classes.inputFieldGroup}>
              <div className={classes.inputField}>
                <Input
                  lable="Firstname"
                  type="text"
                  placeholder="Firstname"
                  id="registerFirstname"
                  changeHandler={(val) => {
                    setData({ ...data, firstName: val });
                  }}
                />
              </div>
              <div className={classes.inputField}>
                <Input
                  lable="Lastname"
                  type="text"
                  placeholder="Lastname"
                  id="registerLastname"
                  changeHandler={(val) => {
                    setData({ ...data, lastName: val });
                  }}
                />
              </div>
            </div>
            <div className={classes.inputField}>
              <Input
                label="Email"
                type="email"
                placeholder="Email"
                id="registerEmail"
                changeHandler={(val) => {
                  setData({ ...data, signUpEmail: val });
                }}
              />
            </div>
            <div className={classes.inputField}>
              <Input
                label="Password"
                type="password"
                placeholder="Password"
                id="registerPassword"
                changeHandler={(val) => {
                  setData({ ...data, signUpPassword: val });
                }}
              />
            </div>

            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{
                padding: "0.8rem 0",
                bgcolor: themeColor.buttonColor,
                maxWidth: "180px",
                ":hover": {
                  bgcolor: themeColor.buttonHoverColor,
                },
                ":active": {
                  bgcolor: themeColor.buttonHoverColor,
                },
              }}
            >
              Register
            </Button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <div className={classes.socialIcon}>
                <i className="fab fa-facebook-f"></i>
              </div>
              <div className={classes.socialIcon}>
                <i className="fab fa-twitter"></i>
              </div>
              <div className={classes.socialIcon}>
                <GoogleIcon />
              </div>
              <div className={classes.socialIcon}>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <div className="loginSignup">
              <div>If you have already account?</div>
              <div onClick={handleSignInClick}>
                <u>Login</u>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <div
              className={`${classes.boldHeading}`}
              style={{ padding: "40px 60px 0px 20px" }}
            >
              New to our community&nbsp;?
            </div>
            <p
              className={`${classes.lightSubHeading}`}
              style={{ padding: "20px 140px 40px 40px" }}
            >
              Discover a world of possibilities! Join us and explore a vibrant
              community where ideas flourish and connections thrive.
            </p>
            <button
              className={`btn transparent`}
              onClick={handleSignUpClick}
              style={{ borderRadius: "10px", transform: "translateX(-25%)" }}
            >
              <div
                className={`${classes.boldSubHeading}`}
                style={{ padding: "10px 20px" }}
              >
                Sign up
              </div>
            </button>
          </div>
        </div>
        <div className="panel right-panel">
          <div className="content">
            <div
              className={`${classes.boldHeading}`}
              style={{ padding: "40px 0px 0px 40px" }}
            >
              One of Our Valued Members
            </div>
            <p
              className={`${classes.lightSubHeading}`}
              style={{ padding: "20px 40px 40px 100px" }}
            >
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button
              className="btn transparent"
              onClick={handleSignInClick}
              style={{ borderRadius: "10px", transform: "translateX(25%)" }}
            >
              <div
                className={`${classes.boldSubHeading}`}
                style={{ padding: "10px 20px" }}
              >
                Sign in
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUpForm;
