import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
  sheetDataUrl
} from "../../constants/mentors";
import { Typography, CircularProgress } from "@material-ui/core";

const MentoringStatistic = () => {
  const [count, setCount] = useState(null);
  const [stat, setStat] = useState(null);
  const chartLabel = [`Engineering`, `Product`, `Data`];
  const chartColor = [
    '#F8C036',
    'black',
    'rgba(0, 0, 0, 0.09)'
  ];
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios.get(sheetDataUrl)
      .then(res => {
        const data = res.data;
        console.log(data)
        if (data.count) {
          setCount(data.count)
        }
        if (data.stat) {
          const firstPreferenceCount = chartLabel.map((key) => data.stat[key])
          setStat(firstPreferenceCount)
        }
        setFetching(false);
      })
      .catch(err => {
        console.log(err);
        setFetching(false);
      })
  }, [])
    
  return (
    <>
      <div>
        {fetching ?
          <>
            <CircularProgress
              size={60}
            />
            <Typography variant="h4">
              {`Loading live registrants data...`}
            </Typography>
          </>
          :
          <>
            <Doughnut 
              data={{
                datasets: [{
                  label: 'First Preference',
                  data: stat,
                  backgroundColor: chartColor,
                  hoverOffset: 4
                }],
                labels: chartLabel,
              }}
            />
            <Typography>
              Participant count: {count}
            </Typography>
          </>
        }
      </div>
    </>
  )
}

export default MentoringStatistic;