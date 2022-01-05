import React from 'react';
import './styles.css';

const OvenView = ({ temperature }) => {
    return (
        <div className="oven">
            <div className="heating-element"></div>
            <div className='temperature'>{temperature}°C</div>
        </div>
    );
};

export default OvenView;
