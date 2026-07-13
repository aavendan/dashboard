import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export default function useFetchData(): OpenMeteoResponse | undefined {

    const  URL = 'https://api.open-meteo.com/v1/forecast?latitude=-2.1962&longitude=-79.8862&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m';

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData: OpenMeteoResponse = await response.json();

            setData(jsonData);
        };

        fetchData();
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return data;
}