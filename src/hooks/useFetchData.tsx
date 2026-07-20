import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

// Estrategia para convertir la opción seleccionada en un objeto
const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  'guayaquil': { latitude: -2.1962, longitude: -79.8862 },
  'quito': { latitude: -0.2298, longitude: -78.5249 },
  'manta': { latitude: -0.9672, longitude: -80.7135 },
  'cuenca': { latitude: -2.8969, longitude: -78.6135 }
};

export default function useFetchData(selectedOption: string | null): OpenMeteoResponse | undefined {

    // Parametrice la opción seleccionada en la URL del requerimiento asíncrono
    const cityConfig = selectedOption != null? CITY_COORDS[selectedOption] : CITY_COORDS["guayaquil"];
    const  URL = `https://api.open-meteo.com/v1/forecast?latitude=${cityConfig.latitude}&longitude=${cityConfig.longitude}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m`;

    const [data, setData] = useState<OpenMeteoResponse>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData: OpenMeteoResponse = await response.json();

            setData(jsonData);
        };

        fetchData();
    }, [selectedOption]); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return data;
}