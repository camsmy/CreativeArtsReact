import React from 'react'
import Select from 'react-select'
import { Col, Form } from 'react-bootstrap'

function SelectMultiConponent({ label, id, name, options, value, onChange, onBlur, error }) {

 
    return (
        <>
            <Form.Label>{label}</Form.Label>
            <Select
                id={id}
                name={name}
                options={options}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                isMulti
            />
            {error != '' &&
                <div className='text-MultiDanger'>{error}</div>}
        </>
    )
}

export default SelectMultiConponent