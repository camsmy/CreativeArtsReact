import { useState } from 'react';
import { Form } from 'react-bootstrap'


function SelectComponent({ defaultValue,handleChange,value, Options,name,touched,errors }) {
    const isValid = touched[name] && !errors[name];
    const isInvalid = !!errors[name];
    return (
        <>
            <Form.Select
                name={name}
                aria-label="Default select example"
                as="select"
                className='py-2  ps-3' 
                isValid={isValid}
                isInvalid={isInvalid}
                value={value}
                onChange={handleChange}
                >
                <option value="" disabled>{defaultValue}</option>
                {
                    Options.map(item => (
                        <option value={item} key={item}
                        >{item}</option>
                    ))
                }
            </Form.Select>

            <Form.Control.Feedback type="invalid">
                Please choose an option.
            </Form.Control.Feedback>
        </>

    )
}

export default SelectComponent
