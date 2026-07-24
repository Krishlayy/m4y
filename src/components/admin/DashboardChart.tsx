"use client";

import { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: '#000',
      titleFont: { family: 'Inter', size: 14, weight: 900 as const },
      bodyFont: { family: 'Inter', size: 14, weight: 700 as const },
      padding: 12,
      cornerRadius: 0,
      displayColors: false,
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: {
        font: { family: 'Inter', weight: 700 as const },
        color: '#000',
      }
    },
    y: {
      grid: { color: '#e5e7eb' },
      border: { display: false },
      ticks: {
        font: { family: 'Inter', weight: 700 as const },
        color: '#000',
        stepSize: 1,
      },
      beginAtZero: true,
    }
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 4,
      borderColor: '#000',
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 8,
      backgroundColor: '#FF3B00',
      borderWidth: 2,
      borderColor: '#000',
    }
  }
};

export default function DashboardChart({ 
  data 
}: { 
  data: { labels: string[], values: number[] } 
}) {
  const chartData = useMemo(() => ({
    labels: data.labels,
    datasets: [
      {
        fill: true,
        data: data.values,
        backgroundColor: 'rgba(255, 215, 0, 0.2)', // Yellow with opacity
      }
    ]
  }), [data.labels, data.values]);

  return (
    <div className="relative w-full h-full min-h-[300px]">
      <Line options={options} data={chartData} />
    </div>
  );
}
