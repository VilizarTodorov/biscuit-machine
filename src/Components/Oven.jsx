import React from 'react';
import { useSelector } from 'react-redux';
import { MAX_TEMPERATURE, MIN_TEMPERATURE } from '../constants/temperatures';
import {
    decrementTemperature,
    incrementTemperature,
    turnOffHeatingElement,
    turnOnHeatingElement,
    ovenIsReady,
    ovenIsNotReady,
} from '../Redux/slices/ovenSlice';
import useHeatUpOven from '../Hooks/useHeatUpOven';
import useMaintainTemperature from '../Hooks/useMaintainTemperature';
import {
    hasProcessStartedSelector,
    hasUnprocessedCookiesSelector,
    heatingElementModeSelector,
    isOvenReadySelector,
    machineModeSelector,
    temperatureSelector,
} from '../Redux/selectors';
import OvenView from '../Views/Oven';
import useCoolDownOven from '../Hooks/useCoolDownOven';
import { getIsHeatingElementOn, getIsMachineOff } from '../utils';

const Oven = () => {
    const temperature = useSelector(temperatureSelector);
    const hasProcessStarted = useSelector(hasProcessStartedSelector);
    const machineMode = useSelector(machineModeSelector);
    const isMachineOff = getIsMachineOff(machineMode);

    const hasUnprocessedCookies = useSelector(hasUnprocessedCookiesSelector);

    const heatingElementMode = useSelector(heatingElementModeSelector);
    const isOvenReady = useSelector(isOvenReadySelector);

    const isHeatingElementOn = getIsHeatingElementOn(heatingElementMode);

    // a hook that heats up the oven until it reaches the desired temperature and sets the oven to ready
    useHeatUpOven(MAX_TEMPERATURE, temperature, machineMode, isOvenReady, incrementTemperature, ovenIsReady);

    //  a hook that maintains the temperature of the oven after the oven has been heated up
    useMaintainTemperature(
        MIN_TEMPERATURE,
        MAX_TEMPERATURE,
        temperature,
        turnOffHeatingElement,
        turnOnHeatingElement,
        incrementTemperature,
        decrementTemperature,
        isOvenReady,
        hasProcessStarted,
        isMachineOff,
        isHeatingElementOn
    );

    // cool down oven after the process has been stopped
    useCoolDownOven(
        temperature,
        isMachineOff,
        hasProcessStarted,
        hasUnprocessedCookies,
        decrementTemperature,
        ovenIsNotReady,
        heatingElementMode,
        turnOffHeatingElement,
        MIN_TEMPERATURE,
        isOvenReady
    );

    return <OvenView temperature={temperature}></OvenView>;
};

export default Oven;
