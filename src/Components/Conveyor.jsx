import React from 'react';
import { useSelector } from 'react-redux';
import Cookie from './Cookie';
import ConveyorView from '../Views/Conveyor/ConveyorView';
import { cookiesSelector, hasProcessStartedSelector, machineModeSelector } from '../Redux/selectors';
import { getIsMachinePaused } from '../utils';

const Conveyor = () => {
    const cookies = useSelector(cookiesSelector);
    const hasProcessStarted = useSelector(hasProcessStartedSelector);
    const machineMode = useSelector(machineModeSelector);
    const isMachinePaused = getIsMachinePaused(machineMode);

    const isAnimationPaused = !hasProcessStarted || isMachinePaused;
    return (
        <div className="conveyor">
            {cookies.map((cookie,i) => (
                <Cookie
                    isAnimationPaused={isAnimationPaused}
                    isStamped={cookie.isStamped}
                    shouldCookieBeBaked={cookie.shouldCookieBeBaked}
                    key={cookie.id}
                ></Cookie>
            ))}
            <ConveyorView isAnimationPaused={isAnimationPaused}></ConveyorView>
        </div>
    );
};

export default Conveyor;
