import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function AskBalance() {
    return (
        <div>
            <h1>Ask Me!</h1>
            <div>
            <Link to="/about">to about <sapn> >> </sapn></Link>
            </div>
            <div>
            <Link to="/">to Hmoe Page</Link>
            </div>
        </div>
    );
  }