import './App.css'

import { useState } from 'react';

import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI';
import ChartUI from './components/ChartUI';
import TableUI from './components/TableUI';
import IndicatorUI from './components/IndicatorUI';

import useFetchData from './hooks/useFetchData';

function App() {

  // Utilice una variable de estado para almacenar la opción seleccionada por el usuario
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Comunique la opción seleccionada al hook useFetchData
  const dataFetcherOutput = useFetchData(selectedOption);

  return (
    <Grid container spacing={5} sx={{ justifyContent: "left", alignItems: "center" }}>

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>
        <HeaderUI></HeaderUI>
      </Grid>

      {/* Alertas */}
      <Grid size={12} container sx={{ justifyContent: "right", alignItems: "center" }}>
        <AlertUI description="No se preveen lluvias" />
      </Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3 }}>
        <SelectorUI onOptionSelect={setSelectedOption} />
      </Grid>

      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 9 }} >

        <Grid size={{ xs: 12, md: 3 }}>
          {dataFetcherOutput &&
            (<IndicatorUI
              title='Temperatura (2m)'
              description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.temperature_2m}`} />)
          }
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {/* IndicatorUI con la Temperatura aparente en °C' */}
          {dataFetcherOutput &&
            (<IndicatorUI
              title='Temperatura aparente (2m)'
              description={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.apparent_temperature}`} />)
          }
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {/* IndicatorUI con la Velocidad del viento en km/h' */}
          {dataFetcherOutput &&
            (<IndicatorUI
              title='Velocidad del viento (10m)'
              description={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`} />)
          }
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {/* IndicatorUI con la Humedad relativa en %' */}
          {dataFetcherOutput &&
            (<IndicatorUI
              title='Humedad relativa (2m)'
              description={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`} />)
          }
        </Grid>

      </Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
        {dataFetcherOutput &&
            (<ChartUI
              temperatureData={dataFetcherOutput.hourly.temperature_2m}
              windSpeedData={dataFetcherOutput.hourly.wind_speed_10m}
              timeData={dataFetcherOutput.hourly.time} />)
        }
        { !dataFetcherOutput && <p>Cargando datos...</p> }
      </Grid>

      {/* Tabla */}
      <Grid size={{ xs: 12, md: 6 }} sx={{ display: { xs: "none", md: "block" } }}>
        <TableUI />
      </Grid>

      {/* Información adicional */}
      <Grid size={12}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
