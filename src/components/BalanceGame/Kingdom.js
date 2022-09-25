import React, { useState, useRef, useEffect } from "react";

const Kingdom = ({name, attitude, relations, classColor, handleBuy, handleSell, index, kingdomBackgroundOpacity, baseColor}) => {

    const [vector, setVector] = useState(null);
    const [bcgColor, setBcgColor] = useState('neutral');
    const [time, setTime] = useState(0);
    const [timeTwo, setTimeTwo] = useState(2);
    const [clockActive, setClockActive] = useState(false);
    const hostile = '359, 47, 51'

    const setOneAttitudeBaseColor = () => {
        if (relations >= 168) {
            setBcgColor('friendly')
        } else if (relations >=89 && relations <= 167 ) {
            setBcgColor('neutral');
        } else if (relations <= 88) {
            setBcgColor('hostile');
        }
    }

    useEffect(() => {
        let seconds = 255;
    
        setClockActive(true);
        const interval = setInterval(() => {
  
          setOneAttitudeBaseColor();
         
          setTime((time) => time + 1);
          setTimeTwo((timeTwo) => timeTwo + 2);
        }, 1000);
    
        if (time >= 255) {
          setClockActive(false);
          clearInterval(interval);
        }
        return () => {
          setClockActive(false);
          clearInterval(interval);
        };
      }, [time, clockActive]);

    return (
        <div className={`grid-item ${bcgColor}`} >
            <h2>{name}</h2>
            <p>{bcgColor}</p>
            <p>Attitude to My Kingdom: {attitude}</p>
            <p>Relations value: {relations}</p>
            <div>
                <button onClick={() => handleBuy(index)}>Buy friendship</button>
                <button onClick={() => handleSell(index)}>Sell friendship</button>
            </div>
        </div>
    )
}

export default Kingdom;