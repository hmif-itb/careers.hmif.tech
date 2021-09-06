import * as React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "../theme"
// import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Navbar /> */}
      <div className="">
        <main>
          <div className="container pt-4">{children}</div>
        </main>
        <footer className="text-center">© HMIF ITB 2021</footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
