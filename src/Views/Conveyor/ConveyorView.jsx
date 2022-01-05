import React from 'react';
import { ReactComponent as ConveyorSvg } from './conveyor.svg';
import './styles.css';

const ConveyorView = ({ isAnimationPaused }) => {
    return (
        <div className={`conveyor-line ${isAnimationPaused ? 'pause-animation' : ''}`}>
            <ConveyorSvg />
        </div>
    );
};

export default ConveyorView;
