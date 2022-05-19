import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Mt St Helens',
        city: "Skamania",
        state: "Washington",
        latitude: '46.19021',
        longitude: '-122.18976',
        description: 'National Volcanic Monument',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseCity: (state, action) => { state.city = action.payload},
        chooseState: (state, action) => { state.state = action.payload},
        chooseLatitude: (state, action) => { state.latitude = action.payload},
        chooseLongitude: (state, action) => { state.longitude = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
    }
});

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseCity, chooseState, chooseLatitude, chooseLongitude, chooseDescription } = rootSlice.actions;