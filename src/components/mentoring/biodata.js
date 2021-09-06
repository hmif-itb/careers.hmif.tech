import React from "react"
import { Typography } from "@material-ui/core"

const Biodata = () => {
  return (
    <>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vTblelnEBFp-QWlRaAn38KzbI7K3TORytTlHG2rqW_jKih-E2TLkt3OmZRH13ptBTEpTdke1ZGBTtio/embed?start=false&loop=false&delayms=3000"
        frameborder="0"
        width="100%"
        height="500"
        allowfullscreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
      <Typography variant="h4">Meet the mentors</Typography>
      <Typography variant="subtitle1">...</Typography>
      <div className="m-5" />
    </>
  )
}

export default Biodata
