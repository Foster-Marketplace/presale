import { createTheme } from "@material-ui/core/styles";

const mainBlack = "#212121";
const mainWhite = "#fafafa";
const blue = "#757ce8";
// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: mainBlack,
      white: mainWhite,
      blue: blue,
    },
    primary: {
      main: mainBlack,
    },
    secondary: {
      main: mainWhite,
    },
    info: {
      main: blue,
    },
  },
  typography: {
    fontFamily: [
      'Urbanist',
      'sans-serif'
    ].join(','),
    h1: {
      fontSize: 70,
      fontWeight: 600,
      color: "white",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: "white",
    },
    h3: {
      fontSize: 30,
      fontWeight: 500,
      color: "white",
    },
    a: {
      color: mainBlack,
    },
  },
});

export default theme;
