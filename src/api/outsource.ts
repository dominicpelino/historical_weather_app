import {config} from '../config';

let weatherKey = config.weatherKey
let unsplashKey = config.unsplashKey

export const weatherCalls = {
    getWeather: async (latitude: string, longitude: string, date: string) => {
        const response = await fetch(
            `https://api.weatherstack.com/historical?access_key=${weatherKey}&query=${latitude},${longitude}&historical_date=${date}&hourly=1&interval=12&units=f`,{
            method: 'GET'
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    getPhoto: async (name: string,) => {
        const response = await fetch(
            `https://api.unsplash.com/photos/random?query=${name}&orientation=landscape&client_id=${unsplashKey}`,{
            method: 'GET'
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },
};


