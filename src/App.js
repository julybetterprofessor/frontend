import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './components/register/Register';
import './App.css';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/register' component={Register} />
      </Switch>
       <Form/>
    </div>
  );
}

export default App;