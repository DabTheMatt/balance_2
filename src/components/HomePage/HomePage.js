import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
            <Link to="/balance_2/askbalance">check</Link>
        </div>
        <div>
            <Link to="/balance_2/about">about</Link>
        </div>
        <div>
            <Link to="/balance_2/game">game</Link>
        </div>
        <div>v0.4-alpha-lightning</div>
      </div>
    );
  }