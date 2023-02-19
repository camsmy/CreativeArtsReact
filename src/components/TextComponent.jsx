import { Form } from 'react-bootstrap';
import { useFormik } from "formik"

const TextComponent = ({  name, value, handleChange, touched, errors, ...rest }) => {
    const isValid = touched[name] && !errors[name];
    const isInvalid = !!errors[name];
    return (
        <>

            <Form.Control
                className="py-2 ps-3"
                name={name}
                value={value}
                onChange={handleChange}
                isValid={isValid}
                isInvalid={isInvalid}
                {...rest}
            />
            <Form.Control.Feedback type="invalid">
                {errors[name]}
            </Form.Control.Feedback>

            {/* <Form.Control
                type={InputType}
                placeholder={placeholder}
                required
                className="py-2 ps-3"
                ref={ref}
            />
            <Form.Control.Feedback type="invalid">{ErrorMessage}</Form.Control.Feedback> */}
        </>
    );
};

export default TextComponent;
