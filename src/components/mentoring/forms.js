import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
  Button,
} from "@material-ui/core"
import React, { useState, useRef } from "react"
import "./index.css"
import axios from "axios"
import { useAlert } from "../../contexts/AlertContext"
import { formEntry, formUrl, apiUrl } from "../../constants/mentors"
import { encodeBase64 } from "../../helpers/utils"

const careerPaths = [
  {
    value: "Engineering",
    label: "Engineering (Full, Front, Back)",
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

const MentoringForm = () => {
  const [file, setFile] = useState(null)
  const fileInput = useRef(null)

  const { addAlert } = useAlert()

  const submitGoogleForm = (url, formData) => {
    const config = {
      body: formData,
      method: "post",
      mode: "no-cors",
    }

    fetch(url, config)
    .then(_ => {
      addAlert(`Your information is successfully submitted`, "success")
      document.getElementById("submit-form").reset()
    })
    .catch(_ => {
      addAlert(`Submission failed, please retry`)
      document.getElementById("submit-form").reset()
    })
  }

  const submitWithFile = (uploadedFile, formData) => {
    encodeBase64(uploadedFile)
    .then(bin => {
      const data = bin.split(",")[1]

      return axios
        .post(`${apiUrl}?filename=${uploadedFile.name}`, data)
        .then(res => {
          if (res.data.status === "SUCCESS") {
            return res.data.fileUrl
          } else {
            return null
          }
        })
    })
    .then(res => {
      formData.append(formEntry.cvUrl, res)
      submitGoogleForm(formUrl, formData)
    })
    .catch(err => {
      addAlert(String(err))
    })
  }

  const submitWithoutFile = (formData) => {
    formData.append(formEntry.cvUrl, "no CV uploaded")
    submitGoogleForm(formUrl, formData)
  }  

  const handleSubmit = event => {
    const uploadedFile = (file && (file.length > 0)) ? file[0] : null
    let formData = new FormData(event.target)
    if (uploadedFile) {
      submitWithFile(uploadedFile, formData);
    } else {
      submitWithoutFile(formData);
    }
  }

  return (
    <>
      <div style={{ maxWidth: "var(--maxWidth-4xl)", margin: "auto" }}>
        <Typography variant="h4" className="text-center">
          Register here!
        </Typography>

        <FormGroup className="mt-5">
          <form
            id="submit-form"
            onSubmit={e => {
              e.preventDefault()
              handleSubmit(e)
            }}
          >
            <div className="d-flex justify-content-between mt-4 justify-5-1">
              <TextField
                label="Name"
                className="name-input flex-1"
                required
                variant="filled"
                name={formEntry.name}
              />
              <TextField
                label="NIM"
                variant="filled"
                required
                className="nim-id-input"
                name={formEntry.NIM}
              />
            </div>
            <div className="d-flex justify-content-between mt-4 justify-5-1 last">
              <TextField
                label="Email"
                className="email-input flex-1"
                name={formEntry.email}
                required
                variant="filled"
              />
              <TextField
                label="ID Line"
                className="line-input"
                name={formEntry.idLine}
                required
                variant="filled"
              />
            </div>

            <div className="mt-4">
              <TextField
                className="outlined-multiline-static"
                label="Personal goal"
                multiline
                variant="filled"
                required
                rows={5}
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
                onChange={e => setFile(e.target.files)}
                style={{ display: "none" }}
                accept="application/pdf"
              />
              <Button
                variant="contained"
                color="secondary"
                className="mt-2"
                onClick={() => fileInput.current.click()}
              >
                Upload File
              </Button>
              {(file && (file.length > 0)) ? (
                <Typography variant="body1">{file[0].name}</Typography>
              ) : null}
            </div>

            <div className="mt-4">
              <Typography variant="body1">
                Apakah kamu bisa berkomitmen untuk menjalankan proses mentoring
                selama 2 bulan jika diterima ?
              </Typography>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name={formEntry.commit}
                      size="small"
                      color="primary"
                      required={true}
                      value="Ya"
                    />
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
      </div>
    </>
  )
}

export default MentoringForm
