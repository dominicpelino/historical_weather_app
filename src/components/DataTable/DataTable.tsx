import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid'; 
import { serverCalls } from '../../api'; 
import { useGetData } from '../../custom-hooks'; 
import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle 
} from '@mui/material'; 
import { LocationForm } from '../../components'; 

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 150,
  },
  {
    field: 'state',
    headerName: 'State',
    width: 150,
  },
  {
    field: 'latitude',
    headerName: 'Latitude',
    width: 150,
  },
  {
    field: 'longitude',
    headerName: 'Longitude',
    width: 150,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
];

interface gridData{
  data:{
    id?:string;
  }
};

export const DataTable =  () => {
  
  let { locationData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<GridSelectionModel>([])
  
  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    serverCalls.delete(`${gridData[0]}`)
    getData()
  }
  
  console.log(locationData)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
    <h2>Location Inventory</h2>
    <DataGrid 
        rows={locationData} 
        columns={columns} 
        pageSize={5} 
        checkboxSelection 
        onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
        {...locationData}  
    />

    <Button onClick={handleOpen} color="primary">Update</Button>
    <Button onClick={deleteData} color="warning">Delete</Button>

    {/*Dialog Pop Up begin */}
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Update a Location</DialogTitle>
    <DialogContent>
        <DialogContentText>Update Location id: {gridData[0]}</DialogContentText>
        <LocationForm id={`${gridData[0]}`}/>
    </DialogContent>
    <DialogActions>
        <Button onClick = {handleClose} color="primary">Cancel</Button>
        <Button onClick={handleClose} color="primary">Done</Button> 
    </DialogActions>
    </Dialog>
    </div>
  );
};