import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ONE_SECOND } from '../constants/generalConstants';
import { MACHINE_MODES, OVEN_HEATING_ELEMENT_MODE } from '../constants/modes';

const useMaintainTemperature = (
    minimumTemperature,
    maximumTemperature,
    machineMode,
    temperature,
    heatingElementMode,
    turnOffHeatingElement,
    turnOnHeatingElement,
    incrementTemperature,
    decrementTemperature,
    isOvenReady,
    hasProcessStarted
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if ((machineMode === MACHINE_MODES.OFF && !hasProcessStarted) || !isOvenReady) {
            return;
        }

        if (temperature >= maximumTemperature && heatingElementMode === OVEN_HEATING_ELEMENT_MODE.ON) {
            dispatch(turnOffHeatingElement());
            return;
        }

        if (temperature <= minimumTemperature && heatingElementMode === OVEN_HEATING_ELEMENT_MODE.OFF) {
            dispatch(turnOnHeatingElement());
            return;
        }

        let timer;

        if (heatingElementMode === OVEN_HEATING_ELEMENT_MODE.ON) {
            timer = setTimeout(() => {
                dispatch(incrementTemperature());
            }, ONE_SECOND);
        } else {
            timer = setTimeout(() => {
                dispatch(decrementTemperature());
            }, ONE_SECOND);
        }

        return () => clearTimeout(timer);
    }, [
        temperature,
        heatingElementMode,
        machineMode,
        dispatch,
        minimumTemperature,
        maximumTemperature,
        turnOffHeatingElement,
        turnOnHeatingElement,
        incrementTemperature,
        decrementTemperature,
        isOvenReady,
        hasProcessStarted,
    ]);
};

export default useMaintainTemperature;
