// import { useState } from 'react'

{/* Hooks */ }
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid2'
import IndicatorWeather from './components/IndicatorWeather'
import TableWeather from './components/TableWeather';
import ControlWeather from './components/ControlWeather';
import LineChartWeather from './components/LineChartWeather';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

interface Indicator {
  title?: String;
  subtitle?: String;
  value?: String;
}

interface Item {
  dateIni?: String;
  dateEnd?: String;
  precipitation?: String;
  humidity?: String;
  clouds?: String;
}

function App() {
  // const [count, setCount] = useState(0)

  {/* Variable de estado y función de actualización */ }
  let [status, setStatus] = useState(-1)
  let [indicators, setIndicators] = useState<Indicator[]>([])
  let [items, setItems] = useState<Item[]>([])
  let [precipitation, setPrecipitation] = useState<number[]>([])
  let [humidity, setHumidity] = useState<number[]>([])
  let [clouds, setClouds] = useState<number[]>([])
  let [tags, setTags] = useState<String[]>([])

  {/* Hook: useEffect */ }
  useEffect(() => {

    let request = async () => {

      {/* Request */ }
      let API_KEY = "745783c6269d15ed61aade0056d328d3"
      
      setStatus(0)
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
      
      setStatus(1)
      let savedTextXML = await response.text();
      

      {/* XML Parser */ }
      const parser = new DOMParser();
      const xml = parser.parseFromString(savedTextXML, "application/xml");

      {/* Arreglo para agregar los resultados */ }

      let dataToIndicators: Indicator[] = new Array<Indicator>();
      let dataToItems: Item[] = new Array<Item>();
      let precipitationArray: number[] = new Array<number>();
      let humidityArray: number[] = new Array<number>();
      let cloudsArray: number[] = new Array<number>();
      let tagsArray: String[] = new Array<String>();

      {/* 
          Análisis, extracción y almacenamiento del contenido del XML 
          en el arreglo de resultados
      */}

      let name = xml.getElementsByTagName("name")[0].innerHTML || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "City", "value": name })

      let location = xml.getElementsByTagName("location")[1]

      let latitude = location.getAttribute("latitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Latitude", "value": latitude })

      let longitude = location.getAttribute("longitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Longitude", "value": longitude })

      let altitude = location.getAttribute("altitude") || ""
      dataToIndicators.push({ "title": "Location", "subtitle": "Altitude", "value": altitude })

      let timeArray = xml.getElementsByTagName("time")

      for (let index = 0; index < 6; index++) {
        const time = timeArray[index];
     
        let fromDate = time.getAttribute("from")?.split("T")[1] || ""
        let toDate = time.getAttribute("to")?.split("T")[1] || ""

        let precipitation = time.getElementsByTagName("precipitation")[0].getAttribute("probability") || ""
        let humidity = time.getElementsByTagName("humidity")[0].getAttribute("value") || ""
        let clouds = time.getElementsByTagName("clouds")[0].getAttribute("all") || ""

        precipitationArray.push(parseFloat(precipitation))
        humidityArray.push(parseFloat(humidity))
        cloudsArray.push(parseFloat(clouds))
        tagsArray.push(toDate)

        dataToItems.push({"dateIni":fromDate, "dateEnd":toDate, 
          "precipitation":precipitation,
          "humidity": humidity,
          "clouds":clouds})
      }

      {/* Modificación de la variable de estado mediante la función de actualización */ }
      setStatus(2)
      setIndicators(dataToIndicators)
      setItems(dataToItems)

      setPrecipitation(precipitationArray)
      setHumidity(humidityArray)
      setClouds(cloudsArray)
      setTags(tagsArray)

    }

    request();

  }, [])

  let renderIndicators = () => {

    if(status == 0 || status == 1) {
      return (
      <>
        <Grid size={{ xs: 12, md: 12 }}><IndicatorWeather title={'Loading'} subtitle={'Loading'} value={"Loading"} /> </Grid>
      </>
      )
    }

    return indicators
      .map(
        (indicator, idx) => (
          <Grid key={idx} size={{ xs: 12, xl: 3 }}>
            <IndicatorWeather
              title={indicator["title"]}
              subtitle={indicator["subtitle"]}
              value={indicator["value"]} />
          </Grid>
        )
      )

  }

  return (
    <Grid container spacing={5}>

      {/* Indicadores */}
      {/* <Grid size={{ xs: 12, md: 3 }}><IndicatorWeather title={'Indicator 1'} subtitle={'Unidad 1'} value={"1.23"} /> </Grid>
      <Grid size={{ xs: 12, md: 3 }}><IndicatorWeather title={'Indicator 2'} subtitle={'Unidad 2'} value={"3.12"} /></Grid>
      <Grid size={{ xs: 12, md: 3 }}><IndicatorWeather title={'Indicator 3'} subtitle={'Unidad 3'} value={"2.31"} /></Grid>
      <Grid size={{ xs: 12, md: 3 }}><IndicatorWeather title={'Indicator 4'} subtitle={'Unidad 4'} value={"3.21"} /></Grid> */}

      {renderIndicators()}

      {/* Tabla */}
      <Grid size={{ xs: 12, md: 8 }}>

        {/* Grid Anidado */}
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <ControlWeather />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <TableWeather itemsIn={items} />
          </Grid>
        </Grid>

      </Grid>

      {/* Gráfico */}
      <Grid size={{ xs: 12, xl: 4 }}><LineChartWeather precipitationIn={precipitation} 
      humidityIn={humidity} cloudsIn={clouds} tagsIn={tags}/></Grid>

    </Grid>
  )
}

export default App
