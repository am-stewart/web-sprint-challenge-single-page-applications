import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import * as yup from 'yup';
import formSchema from './formSchema';
import axios from 'axios';

///components
import Home from './Home';
import Form from './Form';
import Item from './Item';

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  pineapple: false,
  peppers: false,
  onions: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  pepperoni: '',
  pineapple: '',
  peppers: '',
  onions: '',
  special: '',
}

const initialOrder = []
const initialDisabled = true

const App = () => {
const [order, setOrder] = useState(initialOrder)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
    .then(resp => {
      setOrder([resp.data, ...order]);
    }).catch(error => console.log(error))
    .finally(() => setFormValues(initialFormValues))
}

const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    toppings: ['pepperoni', 'pineapple', 'peppers', 'onions'].filter(topping => !!formValues[topping]),
    special: formValues.special
  }
  postNewOrder(newOrder);
}

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
})

  return (
    <div className='container'>
      <nav className='nav-links'>
        <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order Form</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Form 
            values={formValues} 
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            details={order}
          />
          {
            order.map(item => {
              return (
                <Item key={item.id} details={item}/>
              )
            })
          }
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
