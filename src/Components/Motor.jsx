import React from 'react';
import { useSelector } from 'react-redux';
import usePulse from '../Hooks/usePulse';
import { hasUnprocessedCookiesSelector, isOvenReadySelector, machineModeSelector } from '../Redux/selectors';
import { bakeCookie, endProcess, passCookieToOven, startProcess } from '../Redux/slices/machineSlice';
import { pulse } from '../Redux/slices/motorSlice';
import { getIsMachineOn, getIsMachinePaused } from '../utils';
import MotorView from '../Views/Motor';

const Motor = () => {
    const isOvenReady = useSelector(isOvenReadySelector);
    const machineMode = useSelector(machineModeSelector);
    const isMachineOn = getIsMachineOn(machineMode);
    const isMachinePaused = getIsMachinePaused(machineMode);
    const hasProcessStarted = useSelector((state) => state.machine.hasProcessStarted);

    const hasUnprocessedCookies = useSelector(hasUnprocessedCookiesSelector);

    const isAnimationPaused = !hasProcessStarted || isMachinePaused;

    usePulse(
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
    );

    return <MotorView isAnimationPaused={isAnimationPaused}></MotorView>;
};

export default Motor;
