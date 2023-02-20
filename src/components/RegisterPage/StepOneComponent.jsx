import { Row, Col, Form, Button } from 'react-bootstrap'
import SelectComponent from '../InputComponents/SelectComponent';
import TextComponent from '../InputComponents/TextComponent';
import { useFormik } from "formik"
import * as yup from 'yup'
import axios from 'axios';


function StepOneComponent({ setdisableTab2, setKey, backButton }) {

    function addUser(user) {
        axios.post('http://localhost:3000/stepOne', user)
            .then(response => {
                // console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function updateUser(updatedData) {
        axios.get('http://localhost:3000/stepOne')
            .then(response => {
                const stepOneData = response.data;
                const latestID = stepOneData.sort((a, b) => b.id - a.id)[0].id;
                axios.put(`http://localhost:3000/stepOne/${latestID}`, updatedData)
                .then(response => {
                    // console.log(response.data);
                    // handle success
                })
                .catch(error => {
                    console.log(error);
                    // handle error
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


    const onSubmit = (value) => {
        if (backButton === true) {
            console.log("back is clicked")
            updateUser(value)
        } else {
            addUser(value)
        }
        setdisableTab2(false)
        setKey('step2')
    }

    const BasicSchema = yup.object().shape({
        selectFair: yup.string().required('Please select an option'),
        firstName: yup.string().required('First name field is required.'),
        lastName: yup.string().required('Last name field is required.'),
        email: yup.string().email('Enter a valid email.').matches(/@[^.]*\./).required('Email is required.'),
        confEmail: yup.string().email('Enter a valid email.').oneOf([yup.ref('email')], 'Email does not match').required('Email is required.'),
        bod: yup.date().max(new Date(), "Date of birth can't be in the future").required('Birthday is required'),
        mobileNumber: yup.number('Value must be a number').required('Mobile number is required'),
        selectCoutryNum: yup.string().required('Please select an option'),
        selectLevel: yup.string().required('Please select an option'),
        selectWeather: yup.string().required('Please select an option')
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: {
            selectFair: '',
            firstName: '',
            lastName: '',
            email: '',
            confEmail: '',
            bod: '',
            mobileNumber: '',
            selectCoutryNum: '',
            selectLevel: '',
            selectWeather: ''
        },
        onSubmit,
        validationSchema: BasicSchema
    });

    return (

        <Form noValidate onSubmit={handleSubmit}>
            <Row className=''>
                <Form.Group as={Col} lg="6" controlId="valid-fair" className='mb-3'>
                    <SelectComponent
                        defaultValue="Which fair are you going to?"
                        Options={["Arts Club", "Music Talent Show", "Business"]}
                        name="selectFair"
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        value={values.selectFair}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="3" controlId="valid-FirstName" className='mb-3'>
                    <TextComponent
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={values.firstName}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="3" controlId="valid-LastName" className='mb-3'>
                    <TextComponent
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={values.lastName}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} lg="6" className="mb-3" controlId="valid-email">
                    <TextComponent
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="6" className="mb-3" controlId="valid-confirmEmail">
                    <TextComponent
                        type="email"
                        placeholder="Confirm Email"
                        name="confEmail"
                        value={values.confEmail}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} lg="6" className="mb-3" controlId="valid-date">
                    <Form.Control
                        type="date"
                        name="bod"
                        placeholder="Date of Birth"
                        value={values.bod}
                        onChange={handleChange}
                        isValid={touched.bod && !errors.bod}
                        isInvalid={!!errors.bod}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.bod}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} lg="3" className="mb-3" controlId="valid-sNumber">
                    <SelectComponent
                        defaultValue="+971 - United Arab Emirated"
                        Options={["Phillipines", "South korea", "Japan"]}
                        name="selectCoutryNum"
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        value={values.selectCoutryNum}
                    />
                </Form.Group>

                <Form.Group as={Col} lg="3" className="mb-3" controlId="valid-Number">
                    <TextComponent
                        type="text"
                        placeholder="Mobile"
                        name="mobileNumber"
                        value={values.mobileNumber}
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                    />
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} lg="6" controlId="valid-Study" className='mb-3'>
                    <SelectComponent
                        defaultValue="What is your current level of study?"
                        Options={["College", "SHS", "Undergrad"]}
                        name="selectLevel"
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        value={values.selectLevel}
                    />
                </Form.Group>
                <Form.Group as={Col} lg="6" controlId="valid-weather" className='mb-3'>
                    <SelectComponent
                        defaultValue="When are your planning to study?"
                        Options={["Fall", "Winter", "Summer"]}
                        name="selectWeather"
                        handleChange={handleChange}
                        touched={touched}
                        errors={errors}
                        value={values.selectWeather}
                    />
                </Form.Group>
            </Row>

            <div className="d-grid gap-2">
                <Button type='submit'
                    variant="primary fw-bold text-uppercase" size="lg">
                    next
                </Button>
            </div>
        </Form>
    )
}

export default StepOneComponent