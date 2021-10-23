import React from "react"
import HomeLayout from "../layouts/home"
import SEO from "../components/seo"
import "../css/tailwind.css"

const IndexPage = () => {
  return (
    <>
      <HomeLayout />
      <SEO title="Career" />
    </>
  )
}

export default IndexPage
