import React from "react";
import { Link, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link id='order-pizza' to='/'>Home</Link>
      </div>
      <Switch>
      
      </Switch>
    </div>
  );
};
export default App;
