import {
    Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend,
    defaults,
  } from "chart.js";

ChartJs.register(
    ArcElement,
    Tooltip,
    Legend
)
  
  import { Pie } from "react-chartjs-2";
  import PieChartData from "../../../data/pieChartTest.json";

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;
  
  
  function PieChart() {
    const data = {
      labels: PieChartData.map((data) => data.label),
      datasets: [
        {
          label: "Source",
          data: PieChartData.map((data) => data.value),
          backgroundColor: ["purple", "blue", "green", "lightblue"],
        },
      ],
    };
  
    const options={
            plugins: {
                title: {
                    text: "Source",
                },
            },
        };
  
    return <Pie data={data} options={options} />;
  }
  
  export default PieChart;