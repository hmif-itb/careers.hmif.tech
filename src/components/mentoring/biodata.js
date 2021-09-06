import React from "react"
import { Typography } from "@material-ui/core"
import {
  DATA_ROLE,
  ENGINEER_ROLE,
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
  return (
    <>
      <Typography variant="h4">Meet the mentors</Typography>
      {mentorAll.map(mentorData => {
        return (
          <div>
            <Typography variant="h6">Role: {mentorData.role}</Typography>
            <div className="row d-flex justify-content-center">
              {mentorData.mentors.map((mentor, idx) => {
                return (
                  <div className="col-md-3 mb-4" key={idx}>
                    <MentorCard mentor={mentor} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      <div className="m-5" />
    </>
  )
}

export default Biodata
