import { createTheme } from "@material-ui/core"

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F8C036",
    },
    secondary: {
      main: "#1A202C",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
})
