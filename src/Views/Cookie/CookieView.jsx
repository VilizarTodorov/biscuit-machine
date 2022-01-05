import React from 'react';
import './styles.css';

const CookieView = ({ additionalClass, isAnimationPaused }) => {
    return <div className={`cookie ${additionalClass} ${isAnimationPaused ? 'pause-animation' : ''}`}></div>;
};

export default CookieView;
