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
import MentoringHead from "../components/mentoring/MentoringHead"
import { Helmet } from "react-helmet"

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
        const data = (bin);
        
        return axios.post(`${apiUrl}?filename=${uploadedFile.name}`, data)
          .then(res => {
            if (res.data.status === "SUCCESS") {
              return res.data.fileUrl;
            } else {
              return null;
            }
          });
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
            handleClick()
          })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const isError = false

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mentoring | Career HMIF ITB</title>
        <meta name="title" content="Mentoring | Career HMIF ITB" />
        <meta
          name="description"
          content="Join us and be part of our cool mentoring program"
        />
        <link rel="icon" href="favicon.ico" type="image/png"></link>
      </Helmet>

      <MentoringHead />
      <Layout>
        <Biodata />
        <div style={{ maxWidth: "var(--maxWidth-4xl)", margin: "auto" }}>
          <Typography variant="h4" className="text-center">
            Register here!
          </Typography>

          <FormGroup className="mt-5">
            <form
              onSubmit={e => {
                e.preventDefault()
                handleSubmit(e)
              }}
            >
              <div className="d-md-flex justify-content-between">
                <TextField 
                  label="Name" 
                  className="name-input mt-4" 
                  required 
                  variant="filled" 
                  name={formEntry.name}
                />
              </div>
              <div className="d-md-flex justify-content-between email-nim-id-container">
                <TextField 
                  label="Email" 
                  className="email-input mt-4" 
                  name={formEntry.email}
                  required
                  variant="filled"
                />
                <div className="d-flex justify-content-between nim-id-container mt-4">
                  <TextField
                    label="NIM"
                    variant="filled"
                    style={{ width: "47.5%" }}
                    required
                    className="nim-id-input"
                    name={formEntry.NIM}
                  />
                  <TextField
                    label="ID Line"
                    style={{ width: "47.5%" }}
                    className="nim-id-input"
                    name={formEntry.idLine}
                    required
                    variant="filled"
                  />
                </div>
              </div>

              <div className="mt-4">
                <TextField
                  className="outlined-multiline-static"
                  label="Personal goal"
                  multiline
                  variant="filled"
                  required
                  rows={5}
                  style={{
                    width: "100%",
                  }}
                  name={formEntry.personalGoal}
                />
                <Typography variant="caption">
                  <span>
                    Elaborasikan goal dua bulan yang ingin anda capai dengan
                    mentoring ini. Goal ini akan menjadi fokus mentor untuk
                    membantu anda.
                  </span>
                  <br />
                  <em>* Ingat perhatikan aspek realita ya, hehehe</em>
                </Typography>
              </div>

              <div className="mt-4">
                <TextField
                  className="outlined-multiline-static"
                  label="Hal yang ingin dipelajari selama mentoring"
                  variant="filled"
                  required
                  multiline
                  rows={5}
                  style={{
                    width: "100%",
                  }}
                  name={formEntry.stuffToLearn}
                />
              </div>

              <div className="mt-4">
                <TextField
                  className="outlined-multiline-static"
                  label="Kenapa kamu perlu dipilih untuk mengikuti program mentoring ini?"
                  variant="filled"
                  multiline
                  rows={5}
                  required
                  style={{
                    width: "100%",
                  }}
                  name={formEntry.whyChooseYou}
                />
                {/* <Typography variant="caption">Santai aja ya</Typography> */}
              </div>

              <div className="mt-4">
                <TextField
                  className="outlined-multiline-static"
                  label="Apa kesibukanmu selama semester ini?"
                  variant="filled"
                  required
                  multiline
                  rows={5}
                  style={{
                    width: "100%",
                  }}
                  name={formEntry.activity}
                />
              </div>

              <div className="d-md-flex justify-content-between mt-4">
                <div className="pref-container mt-4">
                  <TextField
                    id="filled-select-currency"
                    variant="filled"
                    required
                    select
                    label="Preferensi pertama"
                    helperText="Pilih preferensi jalur mentoring pertama"
                    style={{
                      width: "100%",
                    }}
                    name={formEntry.pref1}
                  >
                    {careerPaths.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </div>
                <div className="pref-container mt-4">
                  <TextField
                    id="filled-select-currency"
                    select
                    variant="filled"
                    label="Preferensi kedua"
                    helperText="Pilih preferensi jalur mentoring kedua"
                    style={{
                      width: "100.5%",
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
              </div>

              <div className="mt-4">
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

              <div className="mt-4">
                <Typography variant="body1">
                  Apakah kamu bisa berkomitmen untuk menjalankan proses mentoring
                  selama 2 bulan jika diterima ?
                </Typography>
                <div>
                  <FormControlLabel
                    control={
                      <Checkbox name={formEntry.commit} size="small" color="primary" required={true} value="Ya"/>
                    }
                    label="Jelas dong"
                  />
                </div>{" "}
                <Typography variant="caption">
                  *Sebagai bentuk komitmen, TCD akan memegang uang deposit
                  Rp100.000 dari mentee.
                  <br />
                  Uang deposit tidak akan dikembalikan jika kamu gagal mengikuti
                  program mentoring hingga akhir.
                </Typography>
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  color="primary"
                  variant="contained"
                  className="mt-5 mb-3"
                  type="submit"
                  size="large"
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
      <style>
        {`
        .MuiTypography-caption, .MuiTypography-caption > * {
          line-height: 70%;
        }
          .name-input {
            width: 100%;
          }

          .email-input {
            width: 45%;
          }

          .nim-id-container {
            width: 50%;
          }

          .pref-container {
            width: 49.5%;
          }

          @media only screen and (max-width: 767px) {
            .name-input {
              width: 100%;
            }
  
            .nim-id-container {
              width: 100%;
            } 

            .pref-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
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
