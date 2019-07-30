import React from 'react';
import './App.css';
import { Form } from './components/Form';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Form/>
        <Route exact path='/form' component={Form} />
    </div>
  );
}

export default App;
