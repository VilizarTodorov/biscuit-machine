import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hasProcessStartedSelector } from '../Redux/selectors';
import { pauseMachine, startMachine, stopMachine } from '../Redux/slices/machineSlice';
import { turnOffHeatingElement, turnOnHeatingElement } from '../Redux/slices/ovenSlice';
import SwitchView from '../Views/Switch';

const Switch = () => {
    const dispatch = useDispatch();
    const hasProcessStarted = useSelector(hasProcessStartedSelector);

    const start = () => {
        dispatch(startMachine());
        dispatch(turnOnHeatingElement());
    };

    const pause = () => {
        dispatch(pauseMachine());
    };

    const stop = () => {
        dispatch(stopMachine());
        dispatch(turnOffHeatingElement());
    };

    return <SwitchView isPauseDisabled={!hasProcessStarted} pause={pause} start={start} stop={stop}></SwitchView>;
};

export default Switch;
