import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import AppWrapper from "../components/app"
import Layout from "../components/layout"

import Biodata from "../components/mentoring/biodata"
import MentoringHead from "../components/mentoring/MentoringHead"
import MentoringForm from "../components/mentoring/forms"

const Mentoring = () => {
  return (
    <>
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

        <MentoringHead />
        <Layout>
          <Biodata />
          <MentoringForm />
        </Layout>
      </AppWrapper>
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
