import React from 'react';

export default function Form(props) {
    const { values } = props

    return (
        <form id='pizza-form'>
            <h2>Build a Pizza</h2>

            <label>Name
                <input id='name-input' 
                name='name'
                type='text'
                value={values.name}
                placeholder='Enter your name'
                />
            </label>
        </form>
    )
}