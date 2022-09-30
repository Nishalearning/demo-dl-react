
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/about">Deloitte</Link>
            </li>
            <li>
              <Link to="/users">Demo</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Deloitte />
          </Route>
          <Route path="/users">
            <Demo />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Welcome() {
  return <h2>Welcome</h2>;
}

function Deloitte() {
  return <h2>Deloitte</h2>;
}

function Demo() {
  return <h2>Demo</h2>;
}
