import {
  ArcElement,
  Chart as ChartJs,
  Legend,
  Tooltip,
  defaults,
} from "chart.js";

ChartJs.register(ArcElement, Tooltip, Legend);

import { Pie } from "react-chartjs-2";
import useFetchGraphicsData from "../../../hooks/fetch/useFetchGraphicsData";

interface iGraphicsData {
  label: string;
  value: number;
}

function PieChart() {
  const barChartData: iGraphicsData[] = useFetchGraphicsData(
    "/data/pieChartTest.json"
  );
  const data = {
    labels: barChartData.map((data) => data.label),
    datasets: [
      {
        label: "Source",
        data: barChartData.map((data) => data.value),
        backgroundColor: ["purple", "blue", "green", "lightblue"],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        text: "Source",
      },
    },
  };

  defaults.maintainAspectRatio = false;
  defaults.responsive = true;

  return <Pie data={data} options={options} />;
}

export default PieChart;
