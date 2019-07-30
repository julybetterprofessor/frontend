import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/register/Register';
import './App.css';
import { Form } from './components/Form';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
       <Form/>
        <Route exact path='/form' component={ Form } />
    </div>
  );
}

export default App;