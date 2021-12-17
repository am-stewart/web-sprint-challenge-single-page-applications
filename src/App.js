import React, { useState } from "react";
import { Link, Route, Switch } from 'react-router-dom';

///components
import Form from './Form'

const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  topping1: '',
  topping2: '',
  special: '',
}

const initialDisabled = true

const App = () => {

const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

  return (
    <div className='container'>
      <nav className='nav-links'>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Form</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form values={formValues}/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
