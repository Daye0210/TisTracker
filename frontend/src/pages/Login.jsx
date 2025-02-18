import React, { useEffect, useContext } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../api/userApi";
import { useState } from "react";
import AppContext from "../context/AppContext";

const Login = () => {
    const { user, setUser } = useContext(AppContext);
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, { error, isError, isSuccess, isLoading, data }] =
        useLoginUserMutation();

    useEffect(() => {
        if (isSuccess) {
            console.log(data.user);
            setUser(data.user);
            navigate("/");
        }
        if (isError) {
            setErrorLogin(error.data.message);
            console.log(error);
        }
    }, [isSuccess, isError, error, data]);

    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleLoginClick = () => {
        console.log("login");
        login({ email: email, password: password });
    };
    return (
        <Container maxWidth="sm">
            <Box display="flex" flexDirection="column">
                <Typography variant="h4" component="h1" gutterBottom>
                    Login
                </Typography>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {errorLogin !== "" && (
                    <Typography variant="body1" color="error">
                        {errorLogin}
                    </Typography>
                )}
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
