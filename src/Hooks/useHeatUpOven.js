import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ONE_SECOND } from '../constants/generalConstants';
import { MACHINE_MODES } from '../constants/modes';

const useHeatUpOven = (
    maximumRequiredTemperature,
    currentTemperature,
    machineMode,
    isOvenReady,
    incrementTemperature,
    ovenIsReady,
) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (machineMode !== MACHINE_MODES.ON) {
            return;
        }

        if (isOvenReady) {
            return;
        }

        if (currentTemperature >= maximumRequiredTemperature) {
            dispatch(ovenIsReady());
            return;
        }
        let timer = setTimeout(() => {
            dispatch(incrementTemperature());
        }, ONE_SECOND / 3);

        return () => clearTimeout(timer);
    }, [
        machineMode,
        isOvenReady,
        currentTemperature,
        maximumRequiredTemperature,
        dispatch,
        incrementTemperature,
        ovenIsReady,
    ]);
};

export default useHeatUpOven;
