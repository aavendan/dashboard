import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';

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