import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  );
}
