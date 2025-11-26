// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Grid container spacing={5} justifyContent="center" alignItems="center">

      {/* Encabezado */}
      <Grid size={12}> <HeaderUI></HeaderUI> </Grid>

      {/* Alertas */}
      <Grid size={12}> <AlertUI description='No se preveen lluvias'/> </Grid>

      {/* Selector */}
      <Grid size={{xs: 12, md: 3}}>Elemento: Selector</Grid>

      {/* Indicadores */}
      <Grid size={{xs: 12, md: 9}}>Elemento: Indicadores</Grid>

      {/* Gráfico */}
      <Grid size={{xs: 12, md: 6}} sx={{ display: { xs: "none", md: "block"} }}>Elemento: Gráfico</Grid>

      {/* Tabla */}
      <Grid size={{xs: 12, md: 6}} sx={{ display: { xs: "none", md: "block"} }}>Elemento: Tabla</Grid>

      {/* Información adicional */}
      <Grid size={12}>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App
