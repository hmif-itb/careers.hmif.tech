import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { computeEdges, getTitle, getCareerPathSlug } from "../helpers/utils"

const CareerPathPage = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark {
            edges {
              node {
                html
                frontmatter {
                  slug
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges } = data.allMarkdownRemark
        const path = location.pathname
        const competitionSlug = getCareerPathSlug(path)
        const title = getTitle(competitionSlug)
        const finalEdges = computeEdges(edges, competitionSlug)
        return (
          <>
            <div className="mx-auto min-h-screen">
              <SEO title={title} />
              <Header siteTitle={title} />
              <div className="container mt-10">
                {finalEdges.map(edge => {
                  const siteData = edge.node.frontmatter
                  const { html } = edge.node
                  return (
                    <div key={siteData.title}>
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                  )
                })}
              </div>
            </div>
            <Footer />
          </>
        )
      }}
    />
  )
}

export default CareerPathPage
