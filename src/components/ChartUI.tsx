import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

const arrValues1 = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const arrValues2 = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const arrLabels = ['A','B','C','D','E','F','G'];

interface ChartUIProps {
   temperatureData: number[];
   windSpeedData: number[];
   timeData: string[];
}

export default function ChartUI({ temperatureData, windSpeedData, timeData }: ChartUIProps) {
   return (
      <>
         <Typography variant="h5" component="div">
            Gráfico de Temperatura y Velocidad del Viento
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: temperatureData.slice(0,24), label: 'Temperatura' },
               { data: windSpeedData.slice(0,24), label: 'Velocidad del viento' },
            ]}
            xAxis={[{ scaleType: 'point', data: timeData.slice(0,24) }]}
         />
      </>
   );
}