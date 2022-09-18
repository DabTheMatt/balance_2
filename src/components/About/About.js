import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <Link to="/balance_2/askbalance">to Ask Balance</Link>
            </div>
            <div>
                <Link to="/balance_2/">to Home Page</Link>
            </div>
    </div>
    );
  }