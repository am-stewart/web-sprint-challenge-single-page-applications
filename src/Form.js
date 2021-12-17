import React from 'react';

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h2>Build a Pizza</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>

            <label>Name
                <input id='name-input' 
                    name='name'
                    type='text'
                    value={values.name}
                    placeholder='Enter your name'
                    onChange={onChange}
                />
            </label>

            <label>Size
                <select id='size-dropdown' 
                name='size'
                value={values.size}
                onChange={onChange}
                >
                    <option value=''>--Select size--</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='Extra large'>Extra Large</option>
                </select>
            </label>

            <label>Toppings
              <label>Pepperoni
                <input 
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                />
              </label>
              <label>Pineapple
                  <input
                    type='checkbox'
                    name='pineapple'
                    checked={values.pineapple}
                    onChange={onChange}
                  />
              </label>
              <label>Peppers
                  <input
                  type='checkbox'
                  name='peppers'
                  checked={values.peppers}
                  onChange={onChange}
                  />
              </label>
              <label>Onions
                  <input
                    type='checkbox'
                    name='onions'
                    checked={values.onions}
                    onChange={onChange}
                  />
              </label>
            </label>

            <label>Special
                <input id='special-text'
                    name='special'
                    type='text'
                    value={values.special}
                    placeholder='Enter special instructions'
                    onChange={onChange}
                />
            </label>

            <button id='order-button' disabled={disabled}>Submit Order</button>
        </form>
    )
}