import React from 'react';
import { Doughnut } from 'react-chartjs-2';
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
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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