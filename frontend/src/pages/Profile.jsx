import React, { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import { useCheckUserQuery } from "../api/userApi";
import { CircularProgress } from "@mui/material";

const Profile = () => {
    const { data, error, isLoading, isError, isSucess } = useCheckUserQuery();

    useEffect(() => {
        if (isError) {
            console.log(error);
        }
        if (data) {
            console.log(data);
        }
    }, [isError, error, data, isSucess]);

    if (isLoading) {
        return (
            <Container
                maxWidth="sm"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "80vh",
                }}
            >
                <CircularProgress />
            </Container>
        );
    }

    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    User Profile
                </Typography>
                <Typography variant="h6" component="h2">
                    Name: {data?.user?.name}
                </Typography>
                <Typography variant="h6" component="h2">
                    Email: {data?.user?.email}
                </Typography>
            </Box>
        </Container>
    );
};

export default Profile;
