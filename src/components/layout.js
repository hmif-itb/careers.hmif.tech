import * as React from "react"

// import { Typography } from "@material-ui/core"
// import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
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
    </>
  )
}

export default Layout
