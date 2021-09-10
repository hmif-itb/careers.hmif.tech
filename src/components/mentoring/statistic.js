import React, { useEffect, useState } from "react"
import axios from "axios"
import { Doughnut } from "react-chartjs-2"
import { sheetDataUrl } from "../../constants/mentors"
import { Typography, CircularProgress } from "@material-ui/core"
import "./index.css"

const chartLabel = [`Engineering`, `Product`, `Data`]
const chartColor = ["#F8C036", "black", "rgba(0, 0, 0, 0.09)"]

const MentoringStatistic = () => {
  const [count, setCount] = useState(null)
  const [stat, setStat] = useState(null)
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    axios
      .get(sheetDataUrl)
      .then(res => {
        const data = res.data
        if (data.count) {
          setCount(data.count)
        }
        if (data.stat) {
          const firstPreferenceCount = chartLabel.map(key => data.stat[key])
          setStat(firstPreferenceCount)
        }
        setFetching(false)
      })
      .catch(_ => {
        setFetching(false)
      })
  }, [])

  return (
    <div className="mt-5 mb-5">
      {fetching ? (
        <div className="d-flex flex-column">
          <div className="text-center">
            <CircularProgress size={60} />
          </div>
          <Typography variant="h6" className="text-center">
            {`Loading live registrants data...`}
          </Typography>
        </div>
      ) : (
        <div className="row flex-row-reverse align-items-center justify-content-center">
          <div className="col col-md-5 col-sm-12">
            <div className="mt-4" />
            <Typography variant="h4" className="mb-3 text-center">
              Top preferences
            </Typography>
            <div className="position-relative">
              <div className="place-center">
                <div className="doughnut-wrapper">
                  <Doughnut
                    height={"70%"}
                    width={"70%"}
                    options={{
                      maintainAspectRatio: true,
                      plugins: { legend: { position: "bottom" } },
                    }}
                    data={{
                      datasets: [
                        {
                          label: "First Preference",
                          data: stat,
                          backgroundColor: chartColor,
                          // hoverOffset: 4,
                        },
                      ],
                      labels: chartLabel,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <div className="mt-4" />
            <Typography variant="h1" className="text-center">
              {count}
            </Typography>
            <Typography variant="h4" className="text-center">
              registrant counts
            </Typography>
          </div>
        </div>
      )}
    </div>
  )
}

export default MentoringStatistic
