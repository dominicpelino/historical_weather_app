import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Input } from '../sharedComponents/Input';
import { weatherCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

export interface LocationFormInput {
    latitude: string;
    longitude: string;
}

export interface WeatherResponseData {
    current: {
        feelslike: number;
        temperature: number;
        humidity: number;
        precip: number;
        visibility: number; 
        weather_description: string[0];
        weather_icons: string[0];
        wind_dir: string;
        wind_speed: number;
    }
    location: {
        name: string;
        region: string;
    }
}



export const WeatherForm = () => {
    const { register, handleSubmit } = useForm({})

    const [ weatherData, setWeatherData ] = useState< WeatherResponseData | null>(null);

    const onSubmit = async (data:any, event:any) => {
        const response = await weatherCalls.getCurrent(data.latitude, data.longitude)
            .then(response => {
                setWeatherData(response)
                console.log({response});
            });
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <Input {...register('latitude')} name="latitude" placeholder="Latitude"/>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <Input {...register('longitude')} name="longitude" placeholder="Longitude"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
             
            <div>
                <h1>{`${weatherData?.location.name}, ${weatherData?.location.region}`}</h1>
                <div id="text-block">
                    <p>FEELS LIKE: {`${weatherData?.current.feelslike}`} °F</p>
                    <p>TEMPERATURE: {`${weatherData?.current.temperature}`} °F</p>
                    <p>HUMIDITY: {`${weatherData?.current.humidity}`} °F</p>
                    <p>PRECIPITATION: {`${weatherData?.current.precip}`} IN</p>
                    <p>VISIBILITY: {`${weatherData?.current.visibility}`}</p>
                    <p>DESCRIPTION: {`${weatherData?.current.weather_description}`}</p>
                    <p>WIND DIRECTION: {`${weatherData?.current.wind_dir}`}</p>
                    <p>WIND SPEED: {`${weatherData?.current.wind_speed}`}</p>
                </div>
            </div>
            
        </div>
    )
};


// weatherData?.current ? <p>{`${weatherData?.current?.temperature}`}</p> : null
