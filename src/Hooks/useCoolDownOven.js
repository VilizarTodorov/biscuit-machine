import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ONE_SECOND } from '../constants/generalConstants';
import { OVEN_HEATING_ELEMENT_MODE } from '../constants/modes';

const useCoolDownOven = (
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
) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!temperature || !isMachineOff || hasProcessStarted || hasUnprocessedCookies) {
            return;
        }

        let timer;

        timer = setTimeout(() => {
            dispatch(decrementTemperature());
        }, ONE_SECOND / 2);

        if (heatingElementMode === OVEN_HEATING_ELEMENT_MODE.ON) {
            dispatch(turnOffHeatingElement());
        }

        if (temperature < MIN_TEMPERATURE && isOvenReady) {
            dispatch(ovenIsNotReady());
        }

        return () => clearTimeout(timer);
    }, [
        temperature,
        isMachineOff,
        hasProcessStarted,
        hasUnprocessedCookies,
        decrementTemperature,
        dispatch,
        ovenIsNotReady,
        turnOffHeatingElement,
    ]);
};

export default useCoolDownOven;
