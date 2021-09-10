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
    <div className="m-5">
      {fetching ?
        <div className="d-flex flex-column">
          <div className="text-center">
            <CircularProgress
              size={60}
            />
          </div>
          <Typography variant="h6" className="text-center">
            {`Loading live registrants data...`}
          </Typography>
        </div>        
        :
        <div className="d-flex justify-content-around">
          <div className="w-60 d-flex flex-column">
            <Typography variant="h4" className="text-center">
              Registrant's first track preference
            </Typography>
            <div className="mt-4" />
            <div>
              <Doughnut
                height={500}
                width={500}
                options={{ 
                  maintainAspectRatio: false,
                }}
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
            </div>
          </div>
          <div className="w-40 d-flex flex-column align-self-center">
            <Typography variant="h4" className="text-center">
              Registrant count
            </Typography>
            <Typography variant="h1" className="text-center">
              {count}
            </Typography>
          </div>
        </div>
      }
    </div>
  )
}

export default MentoringStatistic;