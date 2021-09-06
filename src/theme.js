import { createTheme } from "@material-ui/core"

let theme = createTheme({
  palette: {
    primary: {
      main: "#F8C036",
    },
    secondary: {
      main: "#1A202C",
    },
    common: {
      white: "black",
      black: "white",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontWeight: "700",
      letterSpacing: "0",
    },
    h2: {
      fontWeight: "700",
      letterSpacing: "0",
    },
    h3: {
      fontWeight: "600",
    },
    h4: {
      fontWeight: "600",
    },
    h5: {
      fontWeight: "500",
    },
    h6: {
      fontWeight: "500",
    },
  },
})

export default theme
