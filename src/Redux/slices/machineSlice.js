import { createSlice } from '@reduxjs/toolkit';
import { MACHINE_MODES } from '../../constants/modes';
import { nanoid } from 'nanoid';

const cookie = {
    isStamped: false,
    shouldCookieBeBaked: false,
    isBaked: false,
};

const initialState = {
    mode: MACHINE_MODES.OFF,
    producedCookies: [],
    hasProcessStarted: false,
    totalBakedCookies: 0,
};

const machineSlice = createSlice({
    name: 'machine',
    initialState,
    reducers: {
        startMachine: (state) => {
            state.mode = MACHINE_MODES.ON;
        },
        stopMachine: (state) => {
            state.mode = MACHINE_MODES.OFF;
        },
        pauseMachine: (state) => {
            state.mode = MACHINE_MODES.PAUSED;
        },
        startProcess: (state) => {
            state.hasProcessStarted = true;
        },
        endProcess: (state) => {
            state.hasProcessStarted = false;
        },
        produceCookie: (state) => {
            state.producedCookies.push({ ...cookie, id: nanoid() });
        },
        stampCookie: (state) => {
            const cookie = state.producedCookies.find((x) => !x.isStamped);
            if (cookie) {
                cookie.isStamped = true;
            }
        },
        passCookieToOven: (state) => {
            const cookie = state.producedCookies.find((x) => x.isStamped && !x.shouldCookieBeBaked);
            if (cookie) {
                cookie.shouldCookieBeBaked = true;
            }
        },
        bakeCookie: (state) => {
            const cookieIndex = state.producedCookies.findIndex((x) => x.shouldCookieBeBaked && !x.isBaked);
            const cookies = [...state.producedCookies];

            if (cookieIndex > -1) {
                cookies.splice(cookieIndex, 1);
                state.totalBakedCookies += 1;
            }

            state.producedCookies = cookies;
        },
    },
});

export const {
    startMachine,
    stopMachine,
    pauseMachine,
    startProcess,
    endProcess,
    produceCookie,
    stampCookie,
    bakeCookie,
    passCookieToOven,
} = machineSlice.actions;
export const machineReducerName = machineSlice.name;
export default machineSlice.reducer;
