import React, { useEffect, useState } from "react"
import { getGraphData } from "../services/graphApi"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"

const LineGraph = () => {
  const [graphTitle, setGraphTitle] = useState("")
  const [xAxisTitle, setXAxisTitle] = useState("")
  const [line1Title, setLine1Title] = useState("")
  const [line2Title, setLine2Title] = useState("")
  const [graphData, setGraphData] = useState()

  const mapGraphData = (data, line1, line2) =>
    Object.keys(data).map((key, i) => ({
      name: i,
      [line1]: data[key][0],
      [line2]: data[key][1],
      amt: i + 1,
    }))

  const fetchGraphData = () => {
    getGraphData()
      .then((json) => {
        const {
          title: graphTitle,
          "x-axis": xAxisTitle,
          "series-1": line1Title,
          "series-2": line2Title,
          data,
        } = json.data && json.data.demo[0]
        setGraphTitle(graphTitle)
        setXAxisTitle(xAxisTitle)
        setLine1Title(line1Title)
        setLine2Title(line2Title)
        setGraphData(mapGraphData(data, line1Title, line2Title))
      })
      .catch((error) => console.log("Error loading data", error))
  }

  useEffect(() => fetchGraphData(), []) // eslint-disable-line

  return (
    <div>
      <p>Recharts is a Redefined chart library built with React and D3.</p>
      <h3>{graphTitle}</h3>
      <LineChart
        width={400}
        height={400}
        data={graphData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: xAxisTitle, dy: 15 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey={line1Title}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey={line2Title} stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}

export default LineGraph
