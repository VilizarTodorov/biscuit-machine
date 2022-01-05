import React from 'react';
import { ReactComponent as ExtruderSVG } from './extruder.svg';
import './styles.css';

const ExtruderView = () => {
    return (
        <div className="extruder">
            <ExtruderSVG></ExtruderSVG>
        </div>
    );
};

export default ExtruderView;
