import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { responsiveFontSizes } from "@material-ui/core/styles"
import theme from "../theme"
// import { Typography } from "@material-ui/core"
// import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      {/* <Navbar /> */}
      <div className="">
        <main>
          <div className="container pt-4">{children}</div>
        </main>
        <footer>
          {/* <Typography variant="body1"> */}
          <div className="text-center">
            <em>Unleash your career potential with HMIF Tech</em>
          </div>
          {/* </Typography> */}
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
