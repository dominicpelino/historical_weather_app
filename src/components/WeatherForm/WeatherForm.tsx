import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Input } from '../sharedComponents/Input';
import { weatherCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

export interface WeatherResponseData {
    current: {
        temperature: number;
        weather_descriptions: string[];
        wind_speed: number;
        wind_dir: string;
        precip: number;
        humidity: number;
        visibility: number; 
    },
    historical: {
        [key: string]:{
        mintemp: number;
        maxtemp: number;
        avgtemp: number;
        uv_index: number;
        hourly: Hourly[];
        }
    }
    location: {
        name: string;
        region: string;
    }
};



export interface Hourly {
        temperature: number;
        wind_speed: string;
        wind_dir: string;
        weather_descriptions: string[];
        precip: number;
        humidity: number;
        visibility: number; 
};

export interface PhotoResponseData {
    urls: {
        thumb: string;
    }
};

interface Props {
    onSubmitHandler: (data: any, event : any)=>Promise<void>
}

export const WeatherForm = ({onSubmitHandler}: Props) => {
    const { register, handleSubmit } = useForm({})
    
    return (
        <div>
            <h3>Search Weather</h3>
            <form onSubmit = {handleSubmit(onSubmitHandler)}>
                <div>
                    <label htmlFor="date">Date</label>
                    <Input {...register('date')} name="date" placeholder="2022-01-21"/>
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <Input {...register('latitude')} name="latitude" placeholder="47.24636"/>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <Input {...register('longitude')} name="longitude" placeholder="-122.47328"/>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <Input {...register('name')} name="name" placeholder="North Cascades"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};
