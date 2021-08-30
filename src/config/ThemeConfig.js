import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

export const theme = createTheme({
  typography: {
    button: {
      //buttons
      fontFamily: "Montserrat",
      fontSize: 20,
    },
    //labels
    caption: {
      fontFamily: "Montserrat",
      fontWeight:300,
      fontSize: 20,
    },
    //Content
    h1: {
      fontFamily: "Montserrat",
      fontWeight:400,
      fontSize: 16,
    },
    //Secondaries
    h2: {
      fontFamily: "Montserrat",
      fontWeight:300,
      fontSize: 16,
    },
    //Principal Texts
    h3: {
      fontFamily: "Montserrat",
      fontWeight:700,
      fontSize: 24,
    },
    h4: {
      fontFamily: "Montserrat",
      fontSize: 24,
    },
    //Text Presentation
    h5: {
      fontFamily: "Montserrat",
      fontWeight:700,
      fontSize: 45,
    },
    body1: {
      fontFamily: "Montserrat",
      fontSize: 14,
    },
  },
  palette: {

    text: {
      primary: "#4D4D4D",
      secondary: "#002F87",
      button: "#EE7623"
    },
  },
});

export const lightTheme = responsiveFontSizes(theme);