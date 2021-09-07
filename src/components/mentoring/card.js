import { Typography } from "@material-ui/core"
import React from "react"

const MentorCard = ({ mentor }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8C036",
          borderRadius: "7px",
          height: "100%",
          boxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
          WebkitBoxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
          MozBoxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
        }}
        className="d-flex flex-md-column "
      >
        <div className="mentor-image-container">
          <img src={mentor.imgUrl} alt={mentor.name} />
        </div>
        <div className="mentor-desc">
          <Typography variant="body1" className="mentor-name">
            {mentor.name}
          </Typography>
          <Typography variant="body2" className="mentor-experience">
            1. {mentor.experience1}
          </Typography>
          {mentor.experience2 !== "-" && (
            <Typography variant="body2" className="mentor-experience">
              2. {mentor.experience2}
            </Typography>
          )}
        </div>
      </div>
    </>
  )
}

export default MentorCard
