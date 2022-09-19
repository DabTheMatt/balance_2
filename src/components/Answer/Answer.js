import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

export default function Answer(props) {

    const {state} = useLocation();
    const { what, howMany } = state;
    const {ia, setIa} = useState([]);
    let friendsArray = ['ala', 'ela', 'hela'];
    const [friends, setFriends] = useState(friendsArray);

    
const handleAddFriend = () => {
    setFriends((prevFriends) => [
        ...prevFriends,
        {
            name: "Random Friend Name",
            age: 20, // Random age
        },
    ]);
};

    useEffect(() => {
        console.log('hello', howMany);
        makeImageArray(howMany);
        console.log('opopop', ia);
    });
    
    const makeImageArray = (howMany) => {
        let imageArray = [...Array(parseInt(howMany)).keys()]
        console.log('dasda', imageArray);

      }

    return (
        <div>
            <h1>Answer</h1>
            <h2>From AskBalance</h2>
            <h3>{what}</h3>
            <h3>za {howMany}</h3>
            <div>
            
            <ul>
                // Mapping over array of friends
                {friends.map((friend, index) => (
                    // Setting "index" as key because name and age can be repeated, It will be better if you assign uniqe id as key
                    <li key={index}>
                        <span>name: {friend.name}</span>{" "}
                        <span>age: {friend.age}</span>
                    </li>
                ))}
                <button onClick={handleAddFriend}>Add Friends</button>
            </ul>
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
