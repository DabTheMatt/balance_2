import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom";

import Answer from '../Answer/Answer';

export default function AskBalance() {
    const [howMany, setHowMany] = useState('');
    const [what, setWhat] = useState('');
    const [size, setSize] = useState(1);
    const navigate = useNavigate();
    let small = 0.15;
    let medium = 1;
    let big = 4;

    
    
    
    const handleSubmit= (e) =>  {
        if (howMany < 10){
          navigate('/balance_2/answer', {state:{howMany:howMany, what:what, size:2}});
        } else if (howMany >= 10) {
          navigate('/balance_2/answer', {state:{howMany:howMany, what:what, size:2}});
        } else if (howMany >= 20) {
          navigate('/balance_2/answer', {state:{howMany:howMany, what:what, size:2}});
        }
      };
    return (
        <div>
            <h1>Ask Me!</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>What?</label>
                <input type="text" value={what} onChange={e => setWhat(e.target.value)}></input>
             <br/>
               <label>How much?</label>
                <input type="number" value={howMany} onChange={e => setHowMany(e.target.value)}></input>
                <input type="submit" value="Submit"/>
            </form>
            <div>
            <Link to="/balance_2/about">to about</Link>
            </div>
            <div>
            <Link to="/balance_2/">to Hmoe Page</Link>
            </div>
            <h2>{what}</h2>
            <h3>{howMany}</h3>
        </div>
    );
  }