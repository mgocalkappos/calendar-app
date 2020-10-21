import React from 'react';
import './styles/App.css';
import Home from './routes/Home';
import { Route, Redirect, Switch } from 'react-router-dom'

class App extends React.Component {

  render(){

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
