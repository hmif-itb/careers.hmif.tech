import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
  Button,
  Snackbar,
} from "@material-ui/core"
import MuiAlert from "@material-ui/lab/Alert"
import React, { useState } from "react"
import Layout from "../components/layout"

const Mentoring = () => {
  const careerPaths = [
    {
      value: "Engineering",
      label: "Engineering (full stack, frontend, backend)",
    },
    {
      value: "Data",
      label: "Data science / ML",
    },
    {
      value: "Product",
      label: "Product",
    },
  ]

  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const isError = false

  return (
    <Layout>
      <Typography variant="h4">Mentoring registration</Typography>
      <Typography variant="subtitle1">
        Please fill in the fields below
      </Typography>

      <FormGroup className="mt-5">
        <div className="d-flex justify-content-between">
          <TextField
            color="secondary"
            label="Name"
            variant="filled"
            style={{ width: "45%" }}
          />
          <TextField
            color="secondary"
            label="NIM"
            variant="filled"
            style={{ width: "25%" }}
          />
          <TextField
            color="secondary"
            label="ID Line"
            variant="filled"
            style={{ width: "25%" }}
          />
        </div>

        <div className="mt-5">
          <TextField
            id="outlined-multiline-static"
            label="Personal goal target yang ingin dicapai dengan mentoring. Elaborasikan target anda."
            multiline
            rows={5}
            variant="filled"
            color="secondary"
            style={{
              width: "100%",
            }}
          />
        </div>

        <div className="mt-5">
          <TextField
            id="outlined-multiline-static"
            label="Hal yang ingin dipelajari selama mentoring"
            multiline
            rows={5}
            variant="filled"
            color="secondary"
            style={{
              width: "100%",
            }}
          />
        </div>

        <div className="d-flex justify-content-between mt-5">
          <TextField
            id="filled-select-currency"
            select
            label="First preference"
            helperText="Please select your career path preference"
            variant="filled"
            color="secondary"
            style={{
              width: "49.5%",
            }}
          >
            {careerPaths.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-select-currency"
            select
            label="Second preference"
            helperText="Please select your career path preference"
            variant="filled"
            color="secondary"
            style={{
              width: "49.5%",
            }}
          >
            {careerPaths.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="mt-3">
          <Typography variant="h6">CV (bila ada)</Typography>
          <Button variant="contained" color="primary" className="mt-2">
            Upload File
            <input type="file" hidden />
          </Button>
        </div>

        <div className="mt-5">
          <Typography variant="h6">
            Apakah kamu bisa berkomitmen untuk menjalankan proses mentoring
            selama 2 bulan jika diterima ?
          </Typography>
          <Typography variant="subtitle2">
            TCD akan memegang uang deposit Rp100.000. Uang deposit tidak akan
            dikembalikan jika kamu gagal mengikuti program mentoring hingga
            akhir.
          </Typography>
          <FormControlLabel
            control={<Checkbox name="checkedA" color="primary" />}
            label="Ya"
          />
        </div>

        <Button
          color="Secondary"
          variant="contained"
          className="mt-5"
          onClick={handleClick}
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          Submit Registration
        </Button>
      </FormGroup>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={isError ? "error" : "success"}
        >
          {isError
            ? "Error occured on registering. Please try again"
            : "Registered successfully"}
        </MuiAlert>
      </Snackbar>
    </Layout>
  )
}

export default Mentoring

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
