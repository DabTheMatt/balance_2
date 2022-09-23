import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import About from "./components/About/About";
import AskBalance from "./components/AskBalance/AskBalance";
import Answer from "./components/Answer/Answer";
import Apples from "./components/AskBalance2/Apples";
import BalanceGame from "./components/BalanceGame/BalanceGame";

export default function App() {
  return (
    <div>
      
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>

          <Route path="/balance_2/" element={<HomePage />} />
          <Route path="/balance_2/about" element={<About />} />
          <Route path="/balance_2/askbalance" element={<AskBalance />} />
          <Route path="/balance_2/answer" element={<Answer />} />

          <Route path="/balance_2/train" element={<Apples />} />
          <Route path="/balance_2/game" element={<BalanceGame />} />


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/balance_2/">Home</Link>
          </li>
          <li>
            <Link to="/balance_2/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Ups! Nothing here - check url :)</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}