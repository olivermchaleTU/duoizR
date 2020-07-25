import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import TopBar from './components/TopBar/TopBar';
import Home from './views/Home/Home';
import RandomDuo from './components/RandomDuo/RandomDuo';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/randomiser">
          <RandomDuo />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
