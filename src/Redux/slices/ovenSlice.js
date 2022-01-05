import { createSlice } from '@reduxjs/toolkit';
import { OVEN_HEATING_ELEMENT_MODE } from '../../constants/modes';
import { TEMPERATURE_VARIATION } from '../../constants/temperatures';

const initialState = {
    temperature: 0,
    heatingElementMode: OVEN_HEATING_ELEMENT_MODE.OFF,
    isOvenReady: false,
};

const ovenSlice = createSlice({
    name: 'oven',
    initialState,
    reducers: {
        incrementTemperature: (state) => {
            state.temperature += TEMPERATURE_VARIATION;
        },
        decrementTemperature: (state) => {
            state.temperature -= TEMPERATURE_VARIATION;
        },
        turnOnHeatingElement: (state) => {
            state.heatingElementMode = OVEN_HEATING_ELEMENT_MODE.ON;
        },
        turnOffHeatingElement: (state) => {
            state.heatingElementMode = OVEN_HEATING_ELEMENT_MODE.OFF;
        },
        ovenIsReady: (state) => {
            state.isOvenReady = true;
        },
        ovenIsNotReady: (state) => {
            state.isOvenReady = false;
        },
    },
});

export const {
    decrementTemperature,
    incrementTemperature,
    turnOffHeatingElement,
    turnOnHeatingElement,
    ovenIsReady,
    ovenIsNotReady,
} = ovenSlice.actions;
export const ovenReducerName = ovenSlice.name;
export default ovenSlice.reducer;
