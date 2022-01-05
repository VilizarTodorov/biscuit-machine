import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ONE_SECOND } from '../constants/generalConstants';
import useInterval from './useInterval';

const INITIAL_INTERVAL_TIMEOUT = ONE_SECOND * 2;

const usePulse = (
    isOvenReady,
    isMachineOn,
    pulse,
    hasProcessStarted,
    startProcess,
    passCookieToOven,
    bakeCookie,
    hasUnprocessedCookies,
    endProcess,
    isMachinePaused
) => {
    const dispatch = useDispatch();
    const [intervalTriggerOffset, setIntervalTriggerOffset] = useState(0);
    const [lastIntervalTriggerTime, setLastIntervalTriggerTime] = useState(new Date());
    const [intervalTriggerTime, setIntervalTriggerTime] = useState(null);

    // start process of producing cookies
    useEffect(() => {
        if (!isMachineOn || !isOvenReady) {
            return;
        }
        //start interval
        setIntervalTriggerTime(INITIAL_INTERVAL_TIMEOUT);
        dispatch(startProcess());
    }, [isMachineOn, isOvenReady, setIntervalTriggerTime, startProcess, dispatch]);

    // end process of producing cookies
    useEffect(() => {
        if (!isMachineOn && !hasUnprocessedCookies && hasProcessStarted) {
            dispatch(endProcess());
            //end interval
            setIntervalTriggerTime(null);
        }
    }, [isMachineOn, hasUnprocessedCookies, hasProcessStarted, setIntervalTriggerTime, endProcess, dispatch]);

    // get remaining time after interval has been paused
    useEffect(() => {
        if (isMachinePaused) {
            setIntervalTriggerTime(null);
            const timeOfPause = new Date();
            const remainingTime = intervalTriggerOffset || INITIAL_INTERVAL_TIMEOUT;
            const newIntervalTime = remainingTime - (timeOfPause.getTime() - lastIntervalTriggerTime.getTime());
            setIntervalTriggerOffset(newIntervalTime);
        } else {
            if (intervalTriggerOffset) {
                setIntervalTriggerTime(intervalTriggerOffset);
            }
            setLastIntervalTriggerTime(new Date());
        }
    }, [isMachinePaused, setLastIntervalTriggerTime]);

    const handlePulse = () => {
        setLastIntervalTriggerTime(new Date());
        dispatch(bakeCookie());
        dispatch(passCookieToOven());
        dispatch(pulse());

        if (intervalTriggerOffset) {
            setIntervalTriggerOffset(0);
            setIntervalTriggerTime(INITIAL_INTERVAL_TIMEOUT);
        }
    };

    useInterval(handlePulse, intervalTriggerTime);
};

export default usePulse;
