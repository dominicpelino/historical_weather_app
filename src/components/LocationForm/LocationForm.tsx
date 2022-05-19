import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { 
    chooseName,
    chooseCity,
    chooseState,
    chooseLatitude,
    chooseLongitude,
    chooseDescription
} from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface LocationFormProps {
    id?:string;
    data?:{}
};

export const LocationForm = (props:LocationFormProps) => {
    const dispatch = useDispatch();
    let { locationData, getData } = useGetData();
    const store = useStore();

    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated:${data.name} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseCity(data.city))
            dispatch(chooseState(data.state))
            dispatch(chooseLatitude(data.latitude))
            dispatch(chooseLongitude(data.longitude))
            dispatch(chooseDescription(data.description))
            console.log(store.getState())

            await serverCalls.create(store.getState())
            window.location.reload()
            event.target.reset();
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Location Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="city">City</label>
                    <Input {...register('city')} name="city" placeholder="City"/>
                </div>
                <div>
                    <label htmlFor="state">State</label>
                    <Input {...register('state')} name="state" placeholder="State"/>
                </div>
                <div>
                    <label htmlFor="latitude">Latitude</label>
                    <Input {...register('latitude')} name="latitude" placeholder="Latitude"/>
                </div>
                <div>
                    <label htmlFor="longitude">Longitude</label>
                    <Input {...register('longitude')} name="longitude" placeholder="Longitude"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder="Description"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
};