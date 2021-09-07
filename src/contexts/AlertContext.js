import React, { createContext, useState, useCallback, useContext } from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"

export const AlertContext = createContext(null)
export const useAlert = () => useContext(AlertContext)

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const AlertProvider = ({ children }) => {
  const DURATION = 3000
  const [alert, setAlert] = useState({
    show: false,
  })

  const removeAlert = () => {
    setAlert({ show: false })
  }

  const addAlert = (message, type = "error") => {
    setAlert({ show: true, message, type })
    setTimeout(() => setAlert({ show: false }), DURATION)
  }

  const alertContextValue = {
    alert,
    addAlert: useCallback((message, type) => addAlert(message, type), []),
    removeAlert: useCallback(() => removeAlert(), []),
  }

  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      {alert.show && (
        <Snackbar
          open={alert?.show}
          autoHideDuration={DURATION}
          onClose={removeAlert}
        >
          <Alert onClose={removeAlert} severity={alert?.type}>
            {alert?.message}
          </Alert>
        </Snackbar>
      )}
    </AlertContext.Provider>
  )
}

export default AlertProvider
