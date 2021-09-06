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
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Biodata from "../components/mentoring/biodata"

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

const Mentoring = () => {
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
      <div style={{ maxWidth: "var(--maxWidth-4xl)", margin: "auto" }}>
        <Typography variant="h3" className="mb-5 text-center">
          Mentoring HMIF ITB
        </Typography>
        <Biodata />
        <Typography variant="h4">Mentoring registration</Typography>
        {/* <hr/>
        <Typography variant="subtitle1">
          Please fill in the fields below
        </Typography> */}

        <FormGroup className="mt-5">
          <form
            onSubmit={e => {
              e.preventDefault()
              handleClick()
            }}
          >
            <div className="d-flex justify-content-between">
              <TextField label="Name" style={{ width: "45%" }} />
              <TextField label="NIM" style={{ width: "25%" }} />
              <TextField label="ID Line" style={{ width: "25%" }} />
            </div>

            <div className="mt-5">
              <TextField
                id="outlined-multiline-static"
                label="Personal goal target yang ingin dicapai dengan mentoring. Elaborasikan target anda."
                multiline
                rows={5}
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
                // variant="filled"
                // color="secondary"
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
                // variant="filled"
                // color="secondary"
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
              <Typography variant="body1">CV (bila ada)</Typography>
              <Button variant="contained" color="secondary" className="mt-2">
                Upload File
                <input type="file" hidden />
              </Button>
            </div>

            <div className="mt-5">
              <Typography variant="body1">
                Apakah kamu bisa berkomitmen untuk menjalankan proses mentoring
                selama 2 bulan jika diterima ?
              </Typography>
              <Typography variant="caption">
                *TCD akan memegang uang deposit Rp100.000. Uang deposit tidak
                akan dikembalikan jika kamu gagal mengikuti program mentoring
                hingga akhir.
              </Typography>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox name="checkedA" color="primary" required={true} />
                  }
                  label="Jelas dong"
                  aria-required={true}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                color="primary"
                variant="contained"
                className="mt-5"
                type="submit"
                style={{
                  textDecoration: "none",
                }}
              >
                Submit Registration
              </Button>
            </div>
          </form>
        </FormGroup>
        <Snackbar
          open={open}
          autoHideDuration={2000}
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
      </div>
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
