import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import { Form } from './components/Form';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/signin' component={ Form } />
      </Switch>
    </div>
  );
}

export default App;