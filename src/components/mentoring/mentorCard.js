import { Typography } from "@material-ui/core"
import React from "react"

const MentorCard = ({ mentor }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8C036",
          padding: "1rem",
          borderRadius: "7px",
          height: "100%",
          boxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
          WebkitBoxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
          MozBoxShadow: "0px 3px 10px 2px rgba(0, 0, 0, 0.25)",
        }}
        className="d-flex flex-md-column"
      >
        <div className="mentor-image-container">
          <img src={mentor.imgUrl} alt="mentor-image" />
        </div>
        <div className="mentor-desc">
          <Typography variant="subtitle2" className="mentor-name">
            {mentor.name}
          </Typography>
          <Typography variant="subtitle2" className="mentor-experience">
            <b>1.</b> {mentor.experience1}
          </Typography>
          <Typography variant="subtitle2" className="mentor-experience">
            <b>2.</b> {mentor.experience2}
          </Typography>
        </div>

        {/* <p>{mentor.name}</p>
        <p>{mentor.role}</p>
        <p>{mentor.experience1}</p>
        <p>{mentor.experience2}</p> */}
      </div>
      <style>
        {`
          .mentor-image-container {
              position: relative;
              width: 100%;
          }

          .mentor-image-container:after {
              content: "";
              display: block;
              padding-bottom: 100%;
          }

          .mentor-image-container img {
            border-radius: 7px;
            position: absolute; 
            top: 0;
            bottom: 0;
            left: 0;
            right: 0; 
            width: 100%; 
            height: 100%;
            object-fit: cover;
            object-position: center center;
          }

          .mentor-name {
            font-size: .75rem;
            font-weight: 700;
          }

          .mentor-experience {
            font-size: .7rem;
            font-weight: 400;
          }

          .mentor-desc {
            margin-top: 2rem;
          }

          @media only screen and (max-width: 767px) {
            .mentor-image-container {
              position: relative;
              width: 30%;
            }

            .mentor-desc {
              margin-top: 0;
              margin-left: 1rem;
              width: 70%;
            }

            .mentor-name {
              font-size: 1rem;
            }
  
            .mentor-experience {
              font-size: .85rem;
            }
          }

          @media only screen and (max-width: 419px) {
            .mentor-name {
              font-size: .75rem;
            }
  
            .mentor-experience {
              font-size: .7rem;
            }
          }
          `}
      </style>
    </>
  )
}

export default MentorCard
