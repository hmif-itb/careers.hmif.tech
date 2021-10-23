import React from "react"
import HomeLayout from "../layouts/home"
import Seo from "../components/seo"
import "../css/tailwind.css"

const IndexPage = () => {
  return (
    <>
      <HomeLayout />
      <Seo title="Career" />
    </>
  )
}

export default IndexPage
