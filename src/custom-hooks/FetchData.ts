import React, { useState, useEffect } from 'react';
import { serverCalls, weatherCalls } from '../api';

export const useGetData = () => {
    const [locationData, setData] = useState<any>([]);

    async function handleDataFetch(){
        const result = await serverCalls.get();
        setData(result)
    }

    // Introducing the useEffect Hook to add our data to react State
    useEffect( () => {
        handleDataFetch();
    }, [])

    return {locationData, getData:handleDataFetch}
}

// export const useGetWeatherData = () => {
//     const [weatherData, setWeatherData] = useState<any>([]);

//     async function handleDataFetch(){
//         const result = await weatherCalls.getWeather();
//         setWeatherData(result)
//     }

//     useEffect( () => {
//         handleDataFetch();
//     }, [])

//     return {weatherData, getData:handleDataFetch}
// }