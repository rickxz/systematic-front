import {
  BarElement,
  CategoryScale,
  Chart as ChartJs,
  Legend,
  LinearScale,
  Tooltip,
  defaults,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import useFetchGraphicsData from "../../../hooks/fetch/useFetchGraphicsData";

ChartJs.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface iGraphicsData {
  label: string;
  value: number;
}

function BarChart() {
  const barChartData: iGraphicsData[] = useFetchGraphicsData(
    "/data/barChartTest.json"
  );
  const data = {
    labels: barChartData.map((data) => data.label),
    datasets: [
      {
        label: "Extraction",
        data: barChartData.map((data) => data.value),
        backgroundColor: ["purple", "blue", "green", "lightblue"],
      },
    ],
  };

  const options = {};

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  return <Bar data={data} options={options} />;
}

export default BarChart;
