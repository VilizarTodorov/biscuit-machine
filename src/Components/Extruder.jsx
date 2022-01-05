import React from 'react';
import { useSelector } from 'react-redux';
import { machineModeSelector, motorPulseSelector } from '../Redux/selectors';
import useProduceCookie from '../Hooks/useProduceCookie';
import { produceCookie } from '../Redux/slices/machineSlice';
import ExtruderView from '../Views/Extruder';
import { getIsMachineOff } from '../utils';

const Extruder = () => {
    const motorPulse = useSelector(motorPulseSelector);
    const hasProcessStarted = useSelector((state) => state.machine.hasProcessStarted);
    const machineMode = useSelector(machineModeSelector);
    const isMachineOff = getIsMachineOff(machineMode);
    useProduceCookie(produceCookie, motorPulse, hasProcessStarted, isMachineOff);
    return <ExtruderView />;
};

export default Extruder;
