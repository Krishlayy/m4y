"use client";

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

export default function BrutalistChart() {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            family: 'Inter',
            size: 14,
            weight: 'bold' as const
          },
          color: '#000'
        }
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#000',
        titleFont: { size: 16, weight: 'bold' as const },
        bodyFont: { size: 14, weight: 'bold' as const },
        padding: 12,
        cornerRadius: 0,
        displayColors: false,
      }
    },
    scales: {
      y: {
        border: { dash: [4, 4], color: '#000', width: 4 },
        grid: { color: 'rgba(0,0,0,0.1)', tickLength: 0 },
        ticks: {
          color: '#000',
          font: { weight: 'bold' as const, size: 14 },
          callback: function(value: any) {
            return '$' + value + 'k';
          }
        }
      },
      x: {
        border: { color: '#000', width: 4 },
        grid: { display: false },
        ticks: {
          color: '#000',
          font: { weight: 'bold' as const, size: 14 }
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeOutQuart' as const
    }
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Client Revenue (Before M4Y)',
        data: [10, 12, 15, 14, 16, 15],
        borderColor: '#000',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 4,
        tension: 0,
        pointBackgroundColor: '#000',
        pointBorderColor: '#000',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        fill: true,
        label: 'Client Revenue (After M4Y)',
        data: [15, 25, 45, 80, 150, 250],
        borderColor: '#000',
        backgroundColor: '#FFD700',
        borderWidth: 4,
        tension: 0,
        pointBackgroundColor: '#FF3B00',
        pointBorderColor: '#000',
        pointBorderWidth: 4,
        pointRadius: 8,
        pointHoverRadius: 10,
      }
    ],
  };

  return (
    <div className="w-full h-[400px] p-6 bg-white border-4 border-black shadow-[8px_8px_0_0_#000]">
      <Line options={options} data={data} />
    </div>
  );
}
