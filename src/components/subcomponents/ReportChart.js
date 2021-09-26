import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { draw } from 'patternomaly';
import './ReportChart.css';

const ReportChart = ({ data }) => {
  var chartLabels = [];
  var chartCounts = [];

  for(const key in data) {
    chartLabels.push(data[key].description);
    chartCounts.push(data[key].count);
  }

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        label: "# of Issues",
        data: chartCounts,
        backgroundColor: [
          draw('plus', 'rgb(255, 99, 132)'),
          draw('dash', 'rgb(54, 162, 235)'),
          draw('disc', 'rgb(255, 206, 86)'),
          draw('triangle', 'rgb(153, 102, 255)'),
          draw('zigzag', 'rgb(50, 168, 82)'),
          draw('square', 'rgb(91, 94, 92)') 
        ],
        borderWidth: 1
      }
    ]
  }

  return (
    <div id="chart-container">
      <Doughnut 
        data={chartData} 
        options={{
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 24
                }
              }
            }
          }
        }}
      />
    </div>
  )
}

export default ReportChart;