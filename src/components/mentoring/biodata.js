import React, { useState, useMemo, useEffect } from "react"
import { MenuItem, Select, Typography } from "@material-ui/core"
import {
  DATA_ROLE,
  ENGINEER_ROLE,
  ALL_ROLES,
  mentors,
  PRODUCT_ROLE,
} from "../../constants/mentors"
import MentorCard from "./mentorCard"

const Biodata = () => {
  const mentorsEngineer = mentors.filter(
    mentor => mentor.role === ENGINEER_ROLE
  )
  const mentorsData = mentors.filter(mentor => mentor.role === DATA_ROLE)
  const mentorsProduct = mentors.filter(mentor => mentor.role === PRODUCT_ROLE)
  const mentorAll = [
    {
      role: ENGINEER_ROLE,
      mentors: mentorsEngineer,
    },
    {
      role: DATA_ROLE,
      mentors: mentorsData,
    },
    {
      role: PRODUCT_ROLE,
      mentors: mentorsProduct,
    },
  ]

  const [select, setSelect] = useState(ALL_ROLES)

  const mentorData = useMemo(() => {
    if (select === ALL_ROLES) return mentorAll
    return mentorAll.filter(data => data.role === select)
  }, [select])

  return (
    <>
      <div className="d-flex justify-content-center">
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTblelnEBFp-QWlRaAn38KzbI7K3TORytTlHG2rqW_jKih-E2TLkt3OmZRH13ptBTEpTdke1ZGBTtio/embed?start=false&loop=false&delayms=3000"
          frameborder="0"
          width="70%"
          style={{ margin: "auto" }}
          height="500px"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <div className="d-flex justify-content-center mt-5 mb-5">
        <Typography variant="h4">
          Meet
          <span style={{ marginLeft: "1rem", marginRight: "1rem" }}>
            <Select value={select} onChange={e => setSelect(e.target.value)}>
              <MenuItem value={ALL_ROLES}>
                <Typography variant="h4">{ALL_ROLES}</Typography>
              </MenuItem>

              {mentorAll.map(mentors => (
                <MenuItem value={mentors.role}>
                  <Typography variant="h4">{mentors.role}</Typography>
                </MenuItem>
              ))}
            </Select>
          </span>
          {/* the */}
          mentors
        </Typography>
      </div>
      <div className="row d-flex justify-content-center">
        {mentorData.map(mentorData => {
          return (
            // <div>
            mentorData.mentors.map((mentor, idx) => {
              return (
                <div className="col-sm-6 col-md-3 col-lg-2 mb-4" key={idx}>
                  <MentorCard mentor={mentor} />
                </div>
              )
            })
            // </div>
          )
        })}
      </div>

      <div className="m-5" />
    </>
  )
}

export default Biodata
