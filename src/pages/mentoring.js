import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import AppWrapper from "../components/app"
import Layout from "../components/layout"

import Biodata from "../components/mentoring/biodata"
import MentoringHead from "../components/mentoring/head"
import MentoringStatistic from "../components/mentoring/statistic"
import MentoringForm from "../components/mentoring/forms"
import MentoringSlide from "../components/mentoring/slide"

const Mentoring = () => {
  return (
    <>
      <AppWrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Career HMIF ITB</title>
          <meta name="title" content="Career HMIF ITB" />
          <meta name="description" content="Career. Commitment. Growth" />
          <link rel="icon" href="favicon.ico" type="image/png"></link>
        </Helmet>

        <MentoringHead />
        <Layout>
          <MentoringSlide />
          <MentoringStatistic />
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
