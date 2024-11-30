{/* Hooks */ }
import { useEffect, useState } from 'react';

import Paper from '@mui/material/Paper';
import { LineChart } from '@mui/x-charts/LineChart';

// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
// const xLabels = [
//     'Page A',
//     'Page B',
//     'Page C',
//     'Page D',
//     'Page E',
//     'Page F',
//     'Page G',
// ];

//{precipitationIn, humidityIn, cloudsIn, tagsIn} : {precipitationIn: number[], humidityIn: number[], cloudsIn: number[], tagsIn: String[]}

interface MyProp {
    precipitationIn: number[];
    humidityIn: number[]; 
    cloudsIn: number[];
    tagsIn: String[];
}

export default function LineChartWeather(arrayIn: MyProp) {

    let [precipitation, setPrecipitation] = useState<number[]>([])
    let [humidity, setHumidity] = useState<number[]>([])
    let [clouds, setClouds] = useState<number[]>([])
    let [tags, setTags] = useState<String[]>([])

    useEffect( ()=> {
        setPrecipitation(arrayIn.precipitationIn)
        setHumidity(arrayIn.humidityIn)
        setClouds(arrayIn.cloudsIn)
        setTags(arrayIn.tagsIn)
    }, [arrayIn]) 

    return (
        <Paper
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >

            {/* Componente para un gráfico de líneas */}
            <LineChart
                width={400}
                height={250}
                series={[
                    { data: precipitation, label: 'Precipitación' },
                    { data: humidity, label: 'Humedad' },
                    { data: clouds, label: 'Nubosidad' }
                ]}
                xAxis={[{ scaleType: 'point', data: tags }]}
            />
        </Paper>
    );
}