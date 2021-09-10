import React from "react"
import "./index.css"
import { useWindowSize } from "react-use"

const MentoringSlide = () => {
  const { width } = useWindowSize()

  const isLargeScreen = width > 767

  return (
    <>
      <div
        className="d-flex justify-content-center mentoring-slide-wrapper"
        style={{
          width: isLargeScreen ? "60%" : "100%",
          paddingTop: isLargeScreen ? "36.5%" : "66.25%",
          marginLeft: isLargeScreen ? "20%" : "0",
        }}
      >
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vTblelnEBFp-QWlRaAn38KzbI7K3TORytTlHG2rqW_jKih-E2TLkt3OmZRH13ptBTEpTdke1ZGBTtio/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          id="mentoring-slide"
          title="Slide"
          allowFullScreen={true}
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        ></iframe>
      </div>
      <div className="m-5" />
    </>
  )
}

export default MentoringSlide
