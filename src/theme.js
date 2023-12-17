// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#388e3c", // A green shade reflecting health and organic nature
      contrastText: "#ffffff", // White text for maximum contrast on primary color
    },
    secondary: {
      main: "#ffa000", // An amber shade for a vibrant contrast
      contrastText: "#000000", // Black text for maximum contrast on secondary color
    },
    background: {
      default: "#f4f4f4", // A light grey background that complements the primary green
      paper: "#ffffff", // White backgrounds for components like Cards and Paper
    },
    text: {
      primary: "#2e2e2e", // Darker text for high readability
      secondary: "#757575", // Lighter grey for less prominent text elements
    },
    // Add other colors or adjust these as needed for your app
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none", // Buttons text isn't capitalized by default
      fontWeight: 500,
    },
    // Define other typography styles as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: "4px",
          padding: "10px 15px",
        },
        containedPrimary: {
          "&:hover": {
            backgroundColor: "#2e7d32", // Darken the primary button on hover
          },
        },
      },
    },

    // Override styles for LinearProgress component
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          overflow: "hidden", // Ensure the borderRadius affects inner bar
          backgroundColor: "#e0e0e0",
        },
        bar: {
          borderRadius: "10px",
          backgroundColor: "#388e3c",
          transition: "width .6s ease", // Smooth transition for width change
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // Set the border-radius, padding, margin, and shadow for Cards
          borderRadius: "16px", // Rounded corners for the card
          padding: "16px", // Padding inside the card
          margin: "8px", // Margin around the card
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Custom shadow for card
          transition: "0.3s", // Smooth transition for hover effects
          "&:hover": {
            boxShadow: "0px 6px 22px rgba(0, 0, 0, 0.15)", // Enhanced shadow on hover
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // Accordion background
          boxShadow: "none", // Remove the default shadow
          "&:before": {
            display: "none", // Remove the default before element
          },
          "&.Mui-expanded": {
            margin: 0, // Remove the additional margin when expanded
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#f4f4f4", // A lighter grey for the summary background
          borderBottom: "1px solid #e0e0e0", // A subtle border for separation
          marginBottom: -1,
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56,
          },
          ".MuiAccordionSummary-content": {
            "&.Mui-expanded": {
              margin: "12px 0", // Ensure spacing consistency
            },
          },
        },
        expandIconWrapper: {
          color: "#388e3c", // Primary green for the expand icon
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px", // Padding for the details section
          borderTop: "1px solid #e0e0e0", // A subtle border at the top of the details
        },
      },
    },
  },
});

export default theme;
