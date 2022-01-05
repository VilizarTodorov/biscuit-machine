import { createSelector } from '@reduxjs/toolkit';

export const machineModeSelector = (state) => state.machine.mode;
export const isOvenReadySelector = (state) => state.oven.isOvenReady;
export const temperatureSelector = (state) => state.oven.temperature;
export const motorPulseSelector = (state) => state.motor.motorPulse;
export const hasProcessStartedSelector = (state) => state.machine.hasProcessStarted;

export const cookiesSelector = (state) => state.machine.producedCookies;

export const hasUnprocessedCookiesSelector = createSelector([cookiesSelector], (cookies) => {
    return !!cookies.find((cookie) => !cookie.isBaked);
});
