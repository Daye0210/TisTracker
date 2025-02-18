import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4CAF50", // Verde
      towhite: "#F1FAEE", // Blanco pastel
    },
    secondary: {
      main: "#8BC34A", // Verde claro
    },
    error: {
      main: "#E57373", // Rojo claro
    },
    warning: {
      main: "#FFB74D", // Naranja claro
    },
    info: {
      main: "#64B5F6", // Azul claro
      details: "#8E9090", // Gris para textos de descripción
      gray: "#F0F0F0", // Gris claro para cajas grises
    },
    success: {
      main: "#81C784", // Verde claro
      soft: "#E8F5E9", // Verde muy claro
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#388E3C", // Verde oscuro
      towhite: "#F1FAEE", // Blanco pastel
    },
    secondary: {
      main: "#689F38", // Verde medio
    },
    error: {
      main: "#D32F2F", // Rojo oscuro
    },
    warning: {
      main: "#FFA000", // Naranja oscuro
    },
    info: {
      main: "#1976D2", // Azul oscuro
      details: "#8E9090", // Gris para textos de descripción
      gray: "#444444", // Gris oscuro
    },
    success: {
      main: "#388E3C", // Verde oscuro
      soft: "#E8F5E9", // Verde muy claro
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export { darkTheme, lightTheme };
