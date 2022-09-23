import React, { useState, useRef, useEffect} from "react";
import Kingdom from "./Kingdom";

const BalanceGame = () => {

    const [ clockOne, setClockOne ] = useState(0);
    const [time, setTime] = useState(0);
    const [timeTwo, setTimeTwo] = useState(2);
    const [clockActive, setClockActive] = useState(false);
  
    useEffect(() => {
      let seconds = 60;
  
      setClockActive(true);
      const interval = setInterval(() => {
        setTime((time) => time + 1);
        setTimeTwo((timeTwo) => timeTwo + 2);
      }, 1000);
  
      if (time >= 60) {
        setClockActive(false);
        clearInterval(interval);
      }
      return () => {
        setClockActive(false);
        clearInterval(interval);
      };
    }, [time, clockActive]);
    return (
        <div>
            <div className="grid-container">
                <Kingdom name={'one'} clockOne={time} />
                <Kingdom name={'two'} clockOne={timeTwo} />
            </div>
        </div>
    )
};

export default BalanceGame;