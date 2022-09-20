import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

export default function Answer(props) {

    const {state} = useLocation();
    const { what, howMany } = state;
    const {ia, setIa} = useState([]);
    const [imagesArrayLength, setImagesArrayLength] = useState(howMany);
    const [goodsName, setGoodsName] = useState('');
    const [goodsValue, setGoodsValue] = useState(0);
    const [rerender, setRerender] = useState(0);

    
// const handleAddFriend = () => {
//     setFriends((prevFriends) => [
//         ...prevFriends,
//         {
//             name: "Random Friend Name",
//             age: 20, // Random age
//         },
//     ]);
// };

    useEffect(() => {
        
            setGoodsName('vacine');
            setGoodsValue(0.5);
            console.log('floor', imagesArrayLength);
            console.log('gval', goodsValue);
             setImagesArrayLength(Math.floor(howMany / goodsValue));
        
        
        console.log('imagesArrayLength', imagesArrayLength);
    },[]);

     function iaa(howMany) {
        return howMany+2;
    }

    
  

    return (
        <div>
            <h1>Answer</h1>
            <h2>From AskBalance</h2>
            <h3>{what}</h3>
            <h3>za {howMany}</h3>
            
            <div className="images-container">
                {
                        
                    [...Array(iaa()).keys()].map(function(el, key) {
                        return(
                            
                                <div className="image-cell" key={key}>{key}</div>
                            
                        )
                    })
                }
            
            </div>
            <div>
                <Link to="/balance_2/askbalance">to Ask Balance</Link>
            </div>
            <div>
                <Link to="/balance_2/">to Home Page</Link>
            </div>
    </div>
    );
  }
