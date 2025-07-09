import { CohereClient } from "cohere-ai";
import { useEffect, useState } from 'react';

import type { dataFetcherOutput } from '../types/DashboardTypes'

export default function MeteoAI( props: dataFetcherOutput ) {
    let [advice, setAdvice] = useState("")

    useEffect(() => {

        const fetchAssistant = async () => {

            try {

                const cohere = new CohereClient({
                    token: "PBaYkjrbK16S7o4zr9aux6OseyMmilR4StgX8q54",
                });

                const chat = await cohere.chat({
                    model: "command",
                    message: `Genera una recomendación del clima en función de la temperatura actual ${props.data?.current.temperature_2m}, la velocidad del viento ${props.data?.current.wind_speed_10m} y la humedad relativa ${props.data?.current.relative_humidity_2m}`,
                });

                // setAdvice(chat.text)

            } catch (error) {
                console.log(error)
            } finally {

            }

            // const client = new OpenAI();
            // const response = await client.responses.create({
            //     model: "gpt-4.1",
            //     input: "Write a one-sentence bedtime story about a unicorn."
            // });

            // setAdvice(response.output_text)
            // console.log(response.output_text)
        }
        fetchAssistant()

    }, [props])

    return { advice }
}