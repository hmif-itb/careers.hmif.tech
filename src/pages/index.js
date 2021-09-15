import * as React from "react"
import { graphql } from "gatsby"

// import { navigate } from "@reach/router"
import Layout from "../components/layout"
import { Typography } from "@material-ui/core"
// Button, Card, CardContent, Grid,
// import Carousel from "react-material-ui-carousel"
import AppWrapper from "../components/app"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <AppWrapper>
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
      <Layout>
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div>
            <Typography variant="h1">Career - HMIF ITB</Typography>
            <Typography variant="h6" style={{ textAlign: "right" }}>
              Coming soon
            </Typography>
          </div>
        </div>
        {/* <Typography variant="subtitle1">
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
      </style> */}
      </Layout>
    </AppWrapper>
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
