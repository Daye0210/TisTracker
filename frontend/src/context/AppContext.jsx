import React, { createContext, useState, useEffect } from "react";
import { useLazyCheckUserQuery, useLogoutUserMutation } from "../api/userApi";
import { CircularProgress, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const saveUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
  };

  const [
    checkUser,
    { data, error, isError, isSuccess, isLoading, isFetching },
  ] = useLazyCheckUserQuery();
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();
  const navigate = useNavigate();
  // Iniciamos el user con los datos del localstorage si existen
  const [user, setUserState] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const setUser = (user) => {
    setUserState(user);
    saveUserToLocalStorage(user);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      setUser(null);
      removeUserFromLocalStorage();
      navigate("/login");
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, handleLogout, checkUser }}
    >
      {isLoading || isFetching || isLoggingOut ? (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Container>
      ) : (
        children
      )}
    </AppContext.Provider>
  );
};

export default AppContext;

// HTTP://d:1234@www.vladvilñady.com.com:50/vladicito?id=456&name=vlad#esta