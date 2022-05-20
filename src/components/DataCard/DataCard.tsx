import React, { useState } from 'react';
import {
    List, 
    ListItem,
    ListItemText,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography 
} from '@mui/material';
import { maxHeight } from '@mui/system';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
import orange_clouds from '../../assets/images/orangeClouds.jpg';
import storm_image from '../../assets/images/storm.jpg';
import { WeatherForm, WeatherResponseData, Hourly } from '../../components';
import { PhotoResponseData } from '../WeatherForm';

interface Props {
    weatherData: WeatherResponseData | null,
    photoData: PhotoResponseData | null,
}
export const DataCard = ({weatherData, photoData} :Props ) => {

    if(weatherData){
        const {current,historical,location} = weatherData
        const historicalDateKey = Object.keys(weatherData.historical)[0]
        const historicalData = historical[historicalDateKey]

        return (
            <div id="doubleBox">
                <Card sx={{ maxWidth: 345 }}>
                    <img id="image" src={`${photoData?.urls.thumb}`} alt="unsplash"/>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Historic Weather
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>{`${location.name}, ${location.region}`}</li>
                                <li>{`${historicalData.hourly[1].weather_descriptions}`}</li>
                                <li>HI: {`${historicalData.maxtemp}`} °F</li>
                                <li>LO: {`${historicalData.mintemp}`} °F</li>
                                <li>Precipitation: {`${historicalData.hourly[0].precip}`} In</li>
                                <li>Wind Direction: {`${historicalData.hourly[0].wind_dir}`}</li>
                                <li>Wind Speed: {`${historicalData.hourly[0].wind_speed}`} Mph</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ maxWidth: 345 }}>
                    <img id="image" src={`${photoData?.urls.thumb}`} alt="unsplash"/>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Today's Weather
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li>{`${location.name}, ${location.region}`}</li>
                                <li>{`${current.weather_descriptions}`}</li>
                                <li>Temp: {`${current.temperature}`} °F</li>
                                <li>Humidity: {`${current.humidity}`} %</li>
                                <li>Precipitation: {`${current.precip}`} In</li>
                                <li>Visibility: {`${current.visibility}`} Mi</li>
                                <li>Wind Direction: {`${current.wind_dir}`}</li>
                                <li>Wind Speed: {`${current.wind_speed}`} Mph</li>
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
                        <Typography gutterBottom variant="h6" component="div">
                        Historic Weather
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li><strong>City, Region</strong></li>
                                <li>Description</li>
                                <li>HI: °F</li>
                                <li>LO: °F</li>
                                <li>Precipitation: In</li>
                                <li>Wind Direction:</li>
                                <li>Wind Speed: Mph</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
                <Card id="boxTwo" sx={{ maxWidth: 345 }}>
                <img id="image" src={`${storm_image}`} alt="unsplash"/>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Today's Weather
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <ul>
                                <li><strong>City, Region</strong></li>
                                <li>Description</li>
                                <li>Temp: °F</li>
                                <li>Humidity: %</li>
                                <li>Precipitation: In</li>
                                <li>Wind Direction:</li>
                                <li>Wind Speed: Mph</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }  
};

