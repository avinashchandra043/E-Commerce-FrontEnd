import React from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../../Action/authAction";

const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    login(userData);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              className="w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: "0.8rem 0", bgcolor: "#9155FD" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center items-center flex-col">
        <div className="py-3 flex items-center">
          <p>If you don't have account?</p>
          <Button
            onClick={() => navigate("/register")}
            className="ml-5"
            size="small"
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
