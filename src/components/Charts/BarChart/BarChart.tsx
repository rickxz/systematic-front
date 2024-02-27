import {
    BarElement,
    CategoryScale,
    Chart as ChartJs,
    Legend,
    LinearScale,
    Tooltip,
  } from "chart.js";
  
  import { Bar } from "react-chartjs-2";
  import barChartData from "../../../data/barChartTest.json";
  
  ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  
  function BarChart() {
    const data = {
      labels: barChartData.map((data) => data.label),
      datasets: [
        {
          label: "Extraction",
          data: barChartData.map((data) => data.value),
          backgroundColor: ["red", "blue", "green", "yellow"],
        },
      ],
    };
  
    const options = {};
  
    return <Bar data={data} options={options} />;
  }
  
  export default BarChart;