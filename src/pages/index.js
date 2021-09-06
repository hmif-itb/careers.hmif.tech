import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { Button, Card, CardContent, Grid, Typography } from "@material-ui/core"
import Carousel from "react-material-ui-carousel"

const Home = () => {
  const events = [
    {
      title: "Event 1",
      description: "Description event 1",
      image: "sample-img-1.jpeg",
    },
    {
      title: "Event 2222222",
      description:
        "Description event 2222222222222222222222 Description event Description event Description event",
      image: "sample-img-2.jpeg",
    },
    {
      title: "Event 3 gan",
      description: "Description event 3 gan",
      image: "sample-img-3.jpg",
    },
  ]

  return (
    <Layout>
      <Typography variant="h1">Career HMIF ITB</Typography>
      <Typography variant="subtitle1">
        We provide you with the best career resources. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Typography>

      <div className="mt-5">
        <Typography variant="h4">Mentoring</Typography>
        <Typography variant="subtitle2">
          Meet the best mentor according to your career path preference. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </Typography>
        <div className="d-flex justify-content-end">
          <Button
            color={"Secondary"}
            variant={"contained"}
            href="/mentoring"
            className="mt-3"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Register here !
          </Button>
        </div>
      </div>

      <div className="mt-5">
        <Typography variant="h4">Events</Typography>
        <Carousel autoPlay={true} animation="slide">
          {events.map((event, idx) => {
            return (
              <div
                key={idx}
                style={{
                  height: "300px",
                }}
              >
                <Card raised>
                  <Grid container spacing={0}>
                    <Grid item xs={8}>
                      <img
                        src={`/${event.image}`}
                        style={{
                          width: "100%",
                        }}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <CardContent className="card-content">
                        <Typography variant="h6" className="card-text">
                          {event.title}
                        </Typography>
                        <Typography variant="subtitle2" className="card-text">
                          {event.description}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </div>
            )
          })}
        </Carousel>
      </div>

      <div className="mt-5">
        <Typography variant="h4">Articles</Typography>
        <Typography variant="subtitle2">
          Career HMIF ITB provide you with the best quality article. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Typography>
        <Button
          color={"Secondary"}
          variant={"contained"}
          href="/article"
          className="mt-3"
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          Check the articles here !
        </Button>
      </div>

      <style>
        {`
          .card-content {
            background-color: #1A202C;
            height: 100%;
          }

          .card-text {
            color: #FFFFFF
          }
        `}
      </style>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
