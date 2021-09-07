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
import React, { useState, useRef } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Biodata from "../components/mentoring/biodata"
import {
  formEntry,
  formUrl,
  apiUrl
} from "../constants/gform"
import axios from "axios"
import { encodeBase64 } from "../utils"

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
  const [file, setFile] = useState(null)
  const fileInput = useRef(null)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleSubmit = (event) => {

    const uploadedFile = (file) ? file[0] : null;

    encodeBase64(uploadedFile)
      .then(bin => {
        if (bin === null) {
          return "no CV uploaded"
        }

        bin = bin.split(',')[1];
        const data = (bin)
        axios.post(`${apiUrl}?filename=${uploadedFile.name}`, data)
        .then(res => {
          console.log(res)
          if (res.data.status === "SUCCESS") {
            return res.data.fileUrl;
          } else {
            return null;
          }
        })
        .then(res => {
          const url = formUrl
      
          let formData = new FormData(event.target)
          formData.append(formEntry.cvUrl, res)
      
          const config = {
            mode: "no-cors",
            headers: {
              'content-type': 'multipart/form-data'
            }
          }
        
          axios.post(url, formData, config)
            .then(res => {
              console.log(res)
              handleClick()
            })
            .catch(err => {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
        })
      })
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
              handleSubmit(e)
            }}
          >
            <div className="d-flex justify-content-between">
              <TextField label="Name" style={{ width: "100%" }} name={formEntry.name}/>
            </div>

            <div className="d-flex justify-content-between">
              <TextField label="NIM" style={{ width: "25%" }} name={formEntry.NIM}/>
              <TextField label="ID Line" style={{ width: "25%" }} name={formEntry.idLine}/>
              <TextField label="Email" style={{ width: "45%" }} name={formEntry.email}/>
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
                name={formEntry.personalGoal}
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
                name={formEntry.stuffToLearn}
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
                name={formEntry.pref1}
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
                name={formEntry.pref2}
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
              <input 
                type="file" 
                ref={fileInput}
                onChange={(e) => setFile(e.target.files)}
                style={{ display: "none" }}
              />
              <Button variant="contained" color="secondary" className="mt-2"
                onClick={() => fileInput.current.click()}
              >
                Upload File
              </Button>
              {file ? <Typography variant="body1">{file[0].name}</Typography> : null}
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
                    <Checkbox name={formEntry.commit} color="primary" required={true} value="Ya"/>
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
