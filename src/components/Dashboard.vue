<template>
    <div>
      <LineChart :chart-data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import { Line } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js';
  
  // Регистрируем необходимые компоненты
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);
  
  export default defineComponent({
    name: 'Dashboard',
    components: {
      LineChart: Line,
    },
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March', 'April'],
          datasets: [
            {
              label: 'My First dataset',
              data: [40, 50, 60, 70],
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
            }
          ]
        },
        chartOptions: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            }
          }
        }
      };
    }
  });
  </script>
  
  <style scoped>
  /* Ваши стили */
  </style>
  