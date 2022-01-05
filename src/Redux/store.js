import { configureStore } from '@reduxjs/toolkit';
import machineReducer, { machineReducerName } from './slices/machineSlice';
import motorReducer, { motorReducerName } from './slices/motorSlice';
import ovenReducer, { ovenReducerName } from './slices/ovenSlice';

const store = configureStore({
    reducer: {
        [machineReducerName]: machineReducer,
        [ovenReducerName]: ovenReducer,
        [motorReducerName]: motorReducer,
    },
});

export default store;