import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom';
import Home from "./components/Home"
import Search from "./components/SearchPage"
import 'bootstrap/dist/css/bootstrap.min.css';
import Testing from "./components/Testing"

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Home}/>

        <Route path="/search"  component={Search}/>
        <Route path="/testing"  component={Testing}/>
       
      </Switch>
    </Router>
  );
}

export default App;
