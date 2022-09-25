import React, { useState, useRef, useEffect} from "react";
import Squere from "./Squere";

const SquereGame = () => {
    const [seconds, setSeconds] = useState(0);

    const [ squereOne, setSquereOne ] = useState(
        {data: {
            index: 1,
            name: "Dogs",
            relations: 50,
            speed: 1
            }
         })

    const [ squereTwo, setSquereTwo ] = useState(
        {data: {
            index: 2,
            name: "Cats",
            relations: 50,
            speed: 1
            }
         })

    const [ squereThree, setSquereThree ] = useState(
        {data: {
            index: 3,
            name: "Birds",
            relations: 50,
            speed: 1
            }
        })
  
    const [ squereFour, setSquereFour ] = useState(
        {data: {
            index: 4,
            name: "Horses",
            relations: 50,
            speed: 1
            }
        })

    const [ squereMy, setSquereMy ] = useState(
        {data: {
            index: 5,
            name: "Horses",
            relations: 50,
            speed: 1
            }
        })
  
    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);

        setSquereOne({...squereOne, data: {
            index: 1,
            name: "Dogs",
            relations: squereOne.data.relations - 1,
            speed: 1
            }
         });

         setSquereTwo({...squereTwo, data: {
            index: 2,
            name: "Cats",
            relations: squereTwo.data.relations - 0.5,
            speed: 1
            }
         });

         setSquereThree({...squereThree, data: {
            index: 3,
            name: "Birds",
            relations: squereThree.data.relations + 1,
            speed: 1
            }
         });

         

      }, 1000);
      return () => clearInterval(interval);
    }, [seconds]);
  
    return (
      <div>
            <div className="grid-container">
                <Squere 
                    index={squereOne.data.index}
                    name={squereOne.data.name}
                    relations={squereOne.data.relations}
                />
                <Squere 
                    index={squereTwo.data.index}
                    name={squereTwo.data.name}
                    relations={squereTwo.data.relations}
                />
                <Squere 
                    index={squereThree.data.index}
                    name={squereThree.data.name}
                    relations={squereThree.data.relations}
                />

            </div>
      </div>
    );
  };
  
  export default SquereGame;