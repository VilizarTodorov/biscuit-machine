import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    motorPulse: false,
};

const motorSlice = createSlice({
    name: 'motor',
    initialState,
    reducers: {
        pulse: (state) => {
            state.motorPulse = !state.motorPulse;
        },
    },
});

export const { pulse } = motorSlice.actions;
export const motorReducerName = motorSlice.name;
export default motorSlice.reducer;
