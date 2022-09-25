import React, { useState, useRef, useEffect} from "react";
import Kingdom from "./Kingdom";
import MyKingdom from "./MyKindgdom";


const BalanceGame = () => {

    const [ clockOne, setClockOne ] = useState(0);
    const [time, setTime] = useState(0);
    const [timeTwo, setTimeTwo] = useState(2);
    const [clockActive, setClockActive] = useState(false);
    const [kingdom1speed, setKingdom1speed] = useState(1);
    const [myMoney, setMyMoney] = useState(10);
    const [oneAttitude, setOneAttitude] = useState(null);

    const handleBuy = (index) => {
        setMyMoney(myMoney - 1);
        if (index === 1) {
            setKingdom1speed(kingdom1speed + 1);
        }
    }

    const handleSell = (index) => {
        setMyMoney(myMoney + 1);
        if (index === 1) {
            setKingdom1speed(kingdom1speed - 1);
        }
    }

    const setOneAttitudeBaseColor = () => {
        if (kingdom1.data.relations >= 168) {
            setOneAttitude('rising');
        } else if (kingdom1.data.relations >=89 && kingdom1.data.relations <= 167 ) {
            setOneAttitude('neutral');
        } else if (kingdom1.data.relations <= 88) {
            setOneAttitude('descending');
        }
    }

    const [ kingdom1, setKingdom1 ] = useState(
        {data: {
            index: 1,
            name: "Dogs",
            startingMoney: 20,
            relations: 128,
            attitude: 'friendly'
            }
         })

    const [ kingdom2, setKingdomTwo ] = useState(
        {data: {
            index: 2,
            name: "Cats",
            startingMoney: 20,
            relations: 50,
            attitude: 'hostile',
            }
        })
  
    useEffect(() => {
      let seconds = 255;
  
      setClockActive(true);
      const interval = setInterval(() => {

        setOneAttitudeBaseColor();
       
            setKingdom1({...kingdom1,  data: {
                index: 1,
                name: "Dogs",
                startingMoney: 20,
                relations: kingdom1.data.relations + kingdom1speed,
                attitude: 'friendly',
                kingdomBackgroundOpacity: kingdom1.data.relations / 256,
                vector: 'neutral'
                },
            });

        setTime((time) => time + 1);
        setTimeTwo((timeTwo) => timeTwo + 2);
      }, 1000);
  
      if (time >= 255 || myMoney <= 0) {
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
                <Kingdom 
                    index={kingdom1.data.index}
                    name={kingdom1.data.name}
                    relations={kingdom1.data.relations}
                    attitude={kingdom1.data.attitude}
                    handleBuy={handleBuy}
                    handleSell={handleSell}
                    kingdomBackgroundOpacity={kingdom1.data.kingdomBackgroundOpacity}
                    baseColor={oneAttitude}
                />
                <Kingdom 
                    name={kingdom2.data.name}
                    relations={kingdom2.data.relations}
                    attitude={kingdom2.data.attitude} 
                />
                <Kingdom name={'two'} clockOne={timeTwo} />
                <Kingdom name={'three'} clockOne={time} />
                <MyKingdom myMoney={myMoney} />
                <Kingdom name={'four'} clockOne={timeTwo} />
                <Kingdom name={'six'} clockOne={timeTwo} />
                <Kingdom name={'seven'} clockOne={time} />
                <Kingdom name={'eight'} clockOne={timeTwo} />
            </div>
        </div>
    )
};

export default BalanceGame;