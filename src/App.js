import React from 'react';
import Conveyor from './Components/Conveyor';
import Extruder from './Components/Extruder';
import Motor from './Components/Motor';
import Oven from './Components/Oven';
import Stamper from './Components/Stamper';
import Switch from './Components/Switch';
import './App.css';

function App() {
    return (
        <div className="main">
            <div className="main-container">
                <h3 className="title">biscuit machine</h3>
                <div className="container">
                    <Extruder></Extruder>
                    <Stamper></Stamper>
                    <Oven></Oven>
                </div>
                <Conveyor></Conveyor>
                <div className="secondary-container">
                    <Motor></Motor>
                    <Switch></Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
