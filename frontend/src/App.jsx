import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import AppContext from "./context/AppContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import NotFound from "./pages/NotFound";
import AppBarWithMenu from "./components/AppBarWithMenu";
import { Box } from "@mui/material";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App({ toggleTheme, isDarkMode }) {
  const { user } = useContext(AppContext);
  const userType = user ? user.user_type : "G";
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AppBarWithMenu
          darkMode={isDarkMode}
          toggleDarkMode={toggleTheme}
          userType={userType}
        />
        <Box sx={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />



            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Box>
      </LocalizationProvider>
    </>
  );
}

export default App;
