import React from 'react';
import { useSelector } from 'react-redux';
import useStampCookie from '../Hooks/useStampCookie';
import { cookiesSelector, hasProcessStartedSelector, machineModeSelector, motorPulseSelector } from '../Redux/selectors';
import { stampCookie } from '../Redux/slices/machineSlice';
import { getIsMachinePaused } from '../utils';
import StamperView from '../Views/Stamper';

const Stamper = () => {
    const motorPulse = useSelector(motorPulseSelector);
    const cookies = useSelector(cookiesSelector);
    const hasProcessStarted = useSelector(hasProcessStartedSelector);
    const machineMode = useSelector(machineModeSelector);
    const isMachinePaused = getIsMachinePaused(machineMode);

    const hasCookiesToStamp = cookies.find((x) => !x.isStamped);
    const isAnimationPaused = !hasProcessStarted || isMachinePaused;

    useStampCookie(stampCookie, motorPulse, hasCookiesToStamp);
    return <StamperView isAnimationPaused={isAnimationPaused} />;
};

export default Stamper;
