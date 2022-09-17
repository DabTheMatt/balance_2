import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function HomePage() {
    return (
      <div>
        <h1>Home Page</h1>
        <div>
            <Link to="/AskBalance">check <sapn> >> </sapn></Link>
        </div>
        <div>
            <Link to="/About">about</Link>
        </div>
        <div>v0.4-alpha-lightning</div>
      </div>
    );
  }