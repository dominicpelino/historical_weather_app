import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { WeatherForm, WeatherResponseData } from '../../components';
import { PhotoResponseData } from '../WeatherForm';
import orange_clouds from '../../assets/images/orangeClouds.jpg';
import storm_image from '../../assets/images/storm.jpg';
import { maxHeight } from '@mui/system';
import { keyboard } from '@testing-library/user-event/dist/keyboard';

interface Props {
    weatherData: WeatherResponseData | null,
    photoData: PhotoResponseData | null
}
export const DataCard = ({weatherData}: Props, {photoData} :Props ) => {

    if(weatherData){
        return (
            <div id="doubleBox">
                <Card sx={{ maxWidth: 345 }}>
                    <img id="image" src="" alt="unsplash"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <h5>Historic Weather</h5>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>{`${weatherData?.location.name}, ${weatherData?.location.region}`}</li>
                                <p>TEMPERATURE: {`${weatherData?.current.temperature}`} °F</p>
                                <li>HUMIDITY: {`${weatherData?.current.humidity}`} °F</li>
                                <li>PRECIPITATION: {`${weatherData?.current.precip}`} IN</li>
                                <li>VISIBILITY: {`${weatherData?.current.visibility}`} MI</li>
                                <li>WIND DIRECTION: {`${weatherData?.current.wind_dir}`}</li>
                                <li>WIND SPEED: {`${weatherData?.current.wind_speed}`} MPH</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <img id="image" src="" alt="unsplash"/>
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <h5>Current Weather </h5>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <ul>
                            <li>{`${weatherData?.location.name}, ${weatherData?.location.region}`}</li>
                            <li>DATE: {`${weatherData?.historical[0].date}`} °F</li>
                            <li>MAXTEMP: {`${weatherData?.historical[0].maxtemp}`} °F</li>
                            <li>MINTEMP: {`${weatherData?.historical[0].mintemp}`}IN</li>
                            <li>AVERAGETEMP: {`${weatherData?.historical[0].avgtemp}`}MI</li>
                            <li>UV INDEX: {`${weatherData?.historical[0].uv_index}`}</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Card>
        </div>
        );
    } 
    else{
        return (
            <div id="doubleBox">
                <Card id="boxOne" sx={{ maxWidth: 345 }}>
                    <img id="image" src={`${orange_clouds}`} alt="unsplash"/>                    
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <h5>Historic Weather</h5>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li><strong>City, Region</strong></li>
                                <li>TEMPERATURE: °F</li>
                                <li>HUMIDITY: °F</li>
                                <li>PRECIPITATION: IN</li>
                                <li>VISIBILITY: MI</li>
                                <li>WIND DIRECTION:</li>
                                <li>WIND SPEED: MPH</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card id="boxTwo" sx={{ maxWidth: 345 }}>
                <img id="image" src={`${storm_image}`} alt="unsplash"/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        <h5>Current Weather </h5>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li><strong>City, Region</strong></li>
                                <li>TEMPERATURE: °F</li>
                                <li>HUMIDITY: °F</li>
                                <li>PRECIPITATION: IN</li>
                                <li>VISIBILITY: MI</li>
                                <li>WIND DIRECTION:</li>
                                <li>WIND SPEED: MPH</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }  
};
