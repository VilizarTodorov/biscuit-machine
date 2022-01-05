import React from 'react';
import Button from '../Button/Button';
import './styles.css'

const SwitchView = ({ isPauseDisabled, start, pause, stop }) => {
    return (
        <div className="switch-container">
            <div className='switch-title'>switch</div>
            <div className="button-container">
                <Button onClick={start} className="start-btn">
                    start
                </Button>
                <Button onClick={pause} className="pause-btn" isDisabled={isPauseDisabled}>
                    pause
                </Button>
                <Button onClick={stop} className="stop-btn">
                    stop
                </Button>
            </div>
        </div>
    );
};

export default SwitchView;
