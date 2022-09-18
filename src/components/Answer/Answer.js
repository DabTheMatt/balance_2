import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";

export default function Answer(props) {

    const {state} = useLocation();
    const { what, howMany } = state;
    return (
        <div>
            <h1>Answer</h1>
            <h2>From AskBalance</h2>
            <h3>{what}</h3>
            <h3>za {howMany}</h3>
            <div>
                <Link to="/balance_2/askbalance">to Ask Balance</Link>
            </div>
            <div>
                <Link to="/balance_2/">to Home Page</Link>
            </div>
    </div>
    );
  }