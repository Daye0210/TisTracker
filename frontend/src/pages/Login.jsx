import React, { useEffect } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../api/userApi";

const Login = () => {
  const navigate = useNavigate();
  const [login, { error: userError, isError: userIsError, isSuccess: userIsSuccess }] = useLoginUserMutation();

  useEffect(() => {
    if (userIsSuccess) {
      navigate("/");
    }
    if (userIsError) {
      console.log(userError);
    }
  }, [userIsSuccess, userIsError]);

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    console.log("login");
    login({ email: "202202138@est.umss.edu", password: "" });
  };
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"

      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLoginClick}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick={handleRegisterClick}
          style={{ marginTop: "10px" }}
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
