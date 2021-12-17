import React from 'react';
import './App.css';

export default function Item({ details }) {
  if (!details) {
    return <h4> Finding order...</h4>
  }

    return (
      <div className='item-container'>
        <p>Name: {details.name}</p>
        <p>Size: {details.size}</p>
        {
          <div className='toppings'>
            Toppings: 
              <ul className='toppings-list'>
                {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
              </ul>
          </div>
        }
          <div>Special Instructions: {details.special}</div>
      </div>
    )
}