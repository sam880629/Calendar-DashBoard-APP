import { createSlice } from '@reduxjs/toolkit';

const getTime = () =>{
    const now = new Date();
    const currentHour = now.getHours();

    const timeArray = [];

    for(let i = currentHour; i < 24; i++){
        timeArray.push(i);
    }

    for (let i = 0; i < currentHour; i++) {
        timeArray.push(i);
    }
      
    return timeArray
}

const initialState = {
    roomData: [
        {
            times: getTime()
        },
       
    ],
    dates: [
        "2024-5-18",
        "2024-5-19",
        "2024-5-20",
        "2024-5-21",
        "2024-5-22",
        "2024-5-23",
        "2024-5-24",
        "2024-5-25",
        "2024-5-26",
        "2024-5-27",
        "2024-5-28",
        "2024-5-29",
        "2024-5-30",
        "2024-5-31",
    ],
    hoursArray: [12, 13, 14, 15, 16, 17, 18, 19, 20 , 21, 22, 23, 0, 1,2,3,4,5,6,7,8,9,10,11],
};

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        setCurrentLayout(state, action) {
            // state.currentLayout = action.payload;
        },
    },
});

export const { setRoomData, setDates, setCurrentLayout } = roomSlice.actions;

export default roomSlice.reducer;