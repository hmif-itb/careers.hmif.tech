import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
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
        const path = location?.pathname
        const competitionSlug = getCareerPathSlug(path)
        console.log(competitionSlug)
        const title = getTitle(competitionSlug)
        const finalEdges = computeEdges(edges, competitionSlug)
        return (
          <>
            <div className="mx-auto min-h-screen bg-gray-900 text-white">
              <Seo title={title} />
              <Header siteTitle={title} />
              <div className="pt-10 container-md pb-4 lg:px-24 xl:px-32">
                {finalEdges.map(edge => {
                  const siteData = edge.node.frontmatter
                  const { html } = edge.node
                  return (
                    <div key={siteData.title} className="web-content">
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
