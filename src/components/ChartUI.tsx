import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import type { Hourly } from '../types/DashboardTypes';

export default function ChartUI( props: Hourly ) {
   return (
      <>
         <Typography variant="h5" component="div">
            Tiempo vs Temperatura 2m (°C) & Velocidad del viento 10m (km/h)
         </Typography>
         <LineChart
            height={300}
            series={[
               { data: props.temperature_2m, label: 'Temperatura 2m (°C)'},
               { data: props.wind_speed_10m, label: 'Velocidad del viento 10m (km/h)'},
            ]}
            xAxis={[{ scaleType: 'point', data: props.time }]}
         />
      </>
   );
}