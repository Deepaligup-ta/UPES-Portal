import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Graph_1 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Dummy data for the chart
    const data = {
      labels: ['Label 1', 'Label 2', 'Label 3'],
      datasets: [{
        data: [30, 40, 20], // Replace with your data values
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)'],
      }],
    };

    const config = {
      type: 'doughnut',
      data: data,
    };

    // Create the chart
    const myChart = new Chart(chartRef.current, config);

    // Clean up the chart when the component unmounts
    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="Group13 ml-24 mt-10 w-80 h-64 relative">
      <div  className="Group9   left-0 top-0 absolute shadow">
        <div width={430} height={430} className="Rectangle36 w-100 h-100 left-0 top-0 absolute bg-white rounded-xl">
          {/* Add background styling here */}
        </div>
        <div className="Graph absolute">
          <div>
            <canvas ref={chartRef} width={400} height={400}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph_1;
