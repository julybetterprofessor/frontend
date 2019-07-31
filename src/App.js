import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';
import { Form } from './components/Form';
import { StudentApp } from "./components/Students/StudentApp"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/register' component={ Register } />
        <Route exact path='/signin' component={ Form } />
        <Route exact path='/studentform' component = { StudentApp }/>
      </Switch>
    </div>
  );
}

export default App;