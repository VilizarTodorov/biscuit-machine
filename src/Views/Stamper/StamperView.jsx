import React from 'react';
import './styles.css';

const StamperView = ({ isAnimationPaused }) => {
    return (
        <div className="stamper">
            <div className="stamper-body"></div>
            <div className={`connecting-rod ${isAnimationPaused ? 'pause-animation' : ''}`}></div>
            <div className="stamp"></div>
        </div>
    );
};

export default StamperView;
