import { MACHINE_MODES, OVEN_HEATING_ELEMENT_MODE } from '../constants/modes';

export const getIsMachinePaused = (machineMode) => machineMode === MACHINE_MODES.PAUSED;

export const getIsMachineOn = (machineMode) => machineMode === MACHINE_MODES.ON;

export const getIsMachineOff = (machineMode) => machineMode === MACHINE_MODES.OFF;

export const getIsHeatingElementOn = (heatingElementMode) => heatingElementMode === OVEN_HEATING_ELEMENT_MODE.ON;
