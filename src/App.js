import React from 'react';
import Conveyor from './Components/Conveyor';
import Extruder from './Components/Extruder';
import Motor from './Components/Motor';
import Oven from './Components/Oven';
import Stamper from './Components/Stamper';
import Switch from './Components/Switch';
import './App.css';
import { useSelector } from 'react-redux';
import { totalBakedCookiesSelector } from './Redux/selectors';

function App() {
    const totalBakedCookies = useSelector(totalBakedCookiesSelector);
    return (
        <div className="main">
            <div className="main-container">
                <h3 className="title">biscuit machine</h3>
                <h4 className="title">total baked biscuits: {totalBakedCookies}</h4>
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
