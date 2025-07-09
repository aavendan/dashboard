import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { Hourly } from '../types/DashboardTypes';

function combineArrays(arrTime: Array<string>, arrTemperature: Array<number>, arrWind: Array<number>) {
   return arrTime.map((time, index) => ({
      id: index,
      time: time,
      temperature: arrTemperature[index],
      wind: arrWind[index]
   }));
}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'time',
      headerName: 'Hora',
      width: 150,
   },
   {
      field: 'temperature',
      headerName: 'Temperatura 2m (°C)',
      width: 150,
   },
   {
      field: 'wind',
      headerName: 'Velocidad del viento 10m (km/h)',
      width: 150,
   },
   {
      field: 'resumen',
      headerName: 'Resumen',
      description: 'No es posible ordenar u ocultar esta columna.',
      sortable: false,
      hideable: false,
      width: 160,
      valueGetter: (_, row) => `${row.time || ''} ${row.temperature || ''} ${row.wind || ''}`,
   },
];

export default function TableUI( props: Hourly ) {

   const rows = combineArrays(props.time, props.temperature_2m, props.wind_speed_10m);

   return (
      <Box sx={{ height: 350, width: '100%' }}>
         <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 5,
                  },
               },
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
         />
      </Box>
   );
}