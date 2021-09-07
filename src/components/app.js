import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import AlertProvider from "../contexts/AlertContext"
import { responsiveFontSizes } from "@material-ui/core/styles"
import theme from "../theme"

const AppWrapper = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <AlertProvider>{children}</AlertProvider>
      </ThemeProvider>
    </div>
  )
}

export default AppWrapper
