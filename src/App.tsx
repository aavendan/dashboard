// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Indicator from './components/Indicator';
import Summary from './components/Summary';
import BasicTable from './components/BasicTable';


function App() {
	// const [count, setCount] = useState(0)

	return (
		<Grid container spacing={5}>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
			</Grid>
			<Grid xs={12} lg={2}>
				<Grid lg={12} sx={{paddingBottom: "5%"}}>
					<Summary></Summary>
				</Grid>
				
			</Grid>
			<Grid xs={12} lg={10}>
				<BasicTable></BasicTable>
			</Grid>
		</Grid>
	)
}

export default App
