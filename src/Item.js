import React from 'react';

export default function Item({ details }) {
  if (!details) {
    return <h4> Finding order...</h4>
  }
    return (
      <div className='item-container'>
        <div>Name: {details.name}</div>
        <div>Size: {details.size}</div>
        {
          <div>
            Toppings: 
              <ul>
                {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
              </ul>
          </div>
        }
          <div>Special Instructions: {details.special}</div>
      </div>
    )
}