import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import PropTypes from 'prop-types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

const StackedBarChart = ({data, title}) => {

  const labels = data.map((_, index) => `Comment ${index + 1}`)

  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
      },
      tooltip: {
        callbacks: {
          title: tooltipItems => data[tooltipItems[0].dataIndex].comment,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  }

  const dataset = {
    labels,
    data,
    datasets: [
      {
        label: 'Positive',
        data: data.map(item => item.positive * 100),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Neutral',
        data: data.map(item => item.neutral * 100),
        backgroundColor: 'rgba(255, 159, 64, 0.5)',
      },
      {
        label: 'Negative',
        data: data.map(item => item.negative * 100),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return <Bar options={options} data={dataset}/>
}

StackedBarChart.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
}

export default StackedBarChart
