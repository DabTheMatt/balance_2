import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <div>
                <Link to="/askbalance">to Ask Balance <sapn> >> </sapn></Link>
            </div>
            <div>
                <Link to="/">to Home Page</Link>
            </div>
    </div>
    );
  }