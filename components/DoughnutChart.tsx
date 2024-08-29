"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ accounts }: DoughnutChartProps) {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 2500],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
    labels: ["Bank A", "Bank B"],
  };

  return <Doughnut 
  data={data} 
  options={{
    cutout:'60%',
    plugins: {
        legend:{
            display:false,
        }
      }
  }}
  />;
}

export default DoughnutChart;
