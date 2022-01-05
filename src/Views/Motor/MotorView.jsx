import React from 'react';
import './styles.css';

const MotorView = ({ isAnimationPaused }) => {
    return (
        <div className={`motor outer ${isAnimationPaused ? 'pause-animation' : ''}`}>
            <div className="motor inner"></div>
            <div className="motor-pointer"></div>
        </div>
    );
};

export default MotorView;
