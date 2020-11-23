import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddPub from './components/AddPub';
import Error404 from './components/Error404';

export default function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addpub">
          <AddPub />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
