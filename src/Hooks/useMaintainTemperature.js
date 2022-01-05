import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ONE_SECOND } from '../constants/generalConstants';

const useMaintainTemperature = (
    minimumTemperature,
    maximumTemperature,
    temperature,
    turnOffHeatingElement,
    turnOnHeatingElement,
    incrementTemperature,
    decrementTemperature,
    isOvenReady,
    hasProcessStarted,
    isMachineOff,
    isHeatingElementOn
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if ((isMachineOff && !hasProcessStarted) || !isOvenReady) {
            return;
        }

        if (temperature >= maximumTemperature && isHeatingElementOn) {
            dispatch(turnOffHeatingElement());
            return;
        }

        if (temperature <= minimumTemperature && !isHeatingElementOn) {
            dispatch(turnOnHeatingElement());
            return;
        }

        let timer;

        if (isHeatingElementOn) {
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
        dispatch,
        minimumTemperature,
        maximumTemperature,
        turnOffHeatingElement,
        turnOnHeatingElement,
        incrementTemperature,
        decrementTemperature,
        isOvenReady,
        hasProcessStarted,
        isMachineOff,
        isHeatingElementOn
    ]);
};

export default useMaintainTemperature;
