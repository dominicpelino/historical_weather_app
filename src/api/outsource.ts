import {config} from '../config';

let weatherKey = `21f8f772db776e7233db2a5eb495f971`

export const weatherCalls = {
    getCurrent: async (latitude: string, longitude: string) => {
        const response = await fetch(
            `https://api.weatherstack.com/current?access_key=${weatherKey}&query=${latitude},${longitude}&units=f`,{
            method: 'GET',
            headers: {
                'Content-Type': 'json'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    getforecast: async (latitude: string, longitude: string) => {
        const response = await fetch(
            `https://api.weatherstack.com/forecast?access_key=${weatherKey}&query=${latitude},${longitude}&forecast_days=7&hourly=3&units=f`,{
            method: 'GET',
            headers: {
                'Content-Type': 'json'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    gethistorical: async (latitude: string, longitude: string, date: string) => {
        const response = await fetch(
            `https://api.weatherstack.com/historical?access_key=${weatherKey}&query=${latitude},${longitude}&historical_date=${date}&units=f`,{
            method: 'GET',
            headers: {
                'Content-Type': 'json'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    }
};

