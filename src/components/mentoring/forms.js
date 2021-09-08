import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  MenuItem,
  TextField,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core"
import React, { useState, useRef } from "react"
import "./index.css"
import axios from "axios"
import { useAlert } from "../../contexts/AlertContext"
import { formEntry, formUrl, apiUrl } from "../../constants/mentors"
import { encodeBase64 } from "../../helpers/utils"
import { REGEXP_NIM, MAX_FILE_SIZE_KB } from "../../constants/utils"

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
  const [pref1, setPref1] = useState(null)
  const [pref2, setPref2] = useState(null)
  const [submitting, setSubmitting] = useState(false)

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
      setSubmitting(false)
    })
    .catch(_ => {
      addAlert(`Submission failed, please retry`)
      document.getElementById("submit-form").reset()
      setSubmitting(false)
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

  const handleFileUpload = (e) => {
    if ((e.target.files.length > 0) && (e.target.files[0].size > MAX_FILE_SIZE_KB)) {
      addAlert("File is too big, the maximum size is 2 MB")
    } else {
      setFile(e.target.files)
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
              setSubmitting(true)
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
                inputProps={{ 
                  pattern: REGEXP_NIM,
                  onInvalid: e => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity("Pastikan kamu anak HMIF angkatan 18, 19 atau 20 ya, dan NIM-nya sudah benar!")
                    }
                  },
                  onInput: e => {
                    e.target.setCustomValidity("Pastikan kamu anak HMIF angkatan 18, 19 atau 20 ya, dan NIM-nya sudah benar!")
                    e.target.reportValidity();
                  }
                }}
              />
            </div>
            <div className="d-flex justify-content-between mt-4 justify-5-1 last">
              <TextField
                label="Email"
                className="email-input flex-1"
                name={formEntry.email}
                required
                variant="filled"
                inputProps={{
                  pattern: "^.+@.+$",
                  onInvalid: e => {
                    e.target.setCustomValidity("");
                    if (!e.target.validity.valid) {
                      e.target.setCustomValidity("Yang bener ya format emailnya")
                    }
                  },
                  onInput: e => {
                    e.target.setCustomValidity("Yang bener ya format emailnya")
                    e.target.reportValidity();
                  }
                }}
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
                  onChange={e => setPref1(e.target.value)}
                >
                  {careerPaths.map(option => (
                    <MenuItem key={option.value} value={option.value} disabled={option.value === pref2}>
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
                  onChange={e => setPref2(e.target.value)}
                >
                  {careerPaths.map(option => (
                    <MenuItem key={option.value} value={option.value} disabled={option.value === pref1}>
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
                onChange={(e) => handleFileUpload(e)}
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
            {submitting ? 
              <div className="d-flex justify-content-center">
                <CircularProgress 
                  size={60}
                />
              </div> 
                :
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
            }
          </form>
        </FormGroup>
      </div>
    </>
  )
}

export default MentoringForm
