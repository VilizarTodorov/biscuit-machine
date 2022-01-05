import { MACHINE_MODES } from '../constants/modes';

export const getIsMachinePaused = (machineMode) => machineMode === MACHINE_MODES.PAUSED;

export const getIsMachineOn = (machineMode) => machineMode === MACHINE_MODES.ON;

export const getIsMachineOff = (machineMode) => machineMode === MACHINE_MODES.OFF;