import { React } from "react";
import "./App.css";
import ScanLayout from "./layout/ScanLayout";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import theme from "./theme"; // Import the theme you just created
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AppBar component="nav">
          <Toolbar />
        </AppBar>
        <ScanLayout />
      </ThemeProvider>

    </>
  );
}

export default App;
