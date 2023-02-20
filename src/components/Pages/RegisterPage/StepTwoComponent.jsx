import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import SelectMultiConponent from '../../InputComponents/SelectMultiConponent';
import { useFormik } from "formik"
import axios from 'axios';

function StepTwoComponent({ setKey, setdisableTab2,backButton,isComplete }) {

    const handlePrevious = () => {
        setdisableTab2(true)
        setKey('step1')
        backButton(true)
    }

    function addUser(user) {
        axios.post('http://localhost:3000/stepTwo', user)
            .then(response => {
                // console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const areaOfCourses = [
        { value: 'MBA', label: 'MBA' },
        { value: 'Undergraduate', label: 'Undergraduate' },
        { value: 'SHS', label: 'SHS' },
        { value: 'Student', label: 'Student' },
    ]
    const areaOfInterest = [
        { value: 'Anthropology', label: 'Anthropology' },
        { value: 'Information Technology', label: 'Information Technology' },
        { value: 'Computer Science', label: 'Computer Science' },
        { value: 'Education', label: 'Education' },
        { value: 'Architecture', label: 'Architecture' },
    ]
    const areaOfCountries = [
        { value: 'Austria', label: 'Austria' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'South Korea', label: 'South Korea' }
    ]

    const [errorCountries, setErrorCountries] = useState('')
    const [errorInterest, setErrorInterest] = useState('')
    const [errorCourses, setErrorCourses] = useState('')

    const { values, setFieldValue, handleSubmit } = useFormik({
        initialValues: {
            multiCourses: [areaOfCourses[0].value, areaOfCourses[1].value],
            multiInterest: [areaOfInterest[0].value, areaOfInterest[4].value],
            multiCountries: [areaOfCountries[0].value, areaOfCountries[1].value]
        },

        onSubmit: (values) => {
            if (!errorCountries && !errorInterest && !errorCourses) {
                addUser(values)
                isComplete(true)
            }
        },
    })

    const validateField = (fieldValue, setErrorFunc, errorMessage) => {
        if (fieldValue.length === 0) {
          setErrorFunc(errorMessage);
        } else {
          setErrorFunc('');
        }
      };

    return (
        <>
            <Form noValidate onSubmit={handleSubmit} className="h-100">
                <Row>
                    <Col xs={12} lg={6}>

                        <Form.Group as={Col} lg="12" controlId={`valid-multipleSelect`} className='mb-3'
                            key={`form-group`}>
                            <SelectMultiConponent
                                label="What courses are you interested in?"
                                id='multiCourses'
                                name='multiCourses'
                                options={areaOfCourses}
                                value={areaOfCourses.filter((option) =>
                                    values.multiCourses.find((value) => value === option.value)
                                )}
                                onChange={(selected) => {
                                    setFieldValue(
                                        'multiCourses',
                                        selected ? selected.map((option) => option.value) : []
                                    );
                                }}
                                onBlur={() => 
                                    validateField(values.multiCourses, setErrorCourses, 'Please select at least 1 courses.')}
                                error={errorCourses}
                            />
                        </Form.Group>

                        <SelectMultiConponent
                            label="What areas are you interested in?"
                            id='multiInterest'
                            name='multiInterest'
                            options={areaOfInterest}
                            value={areaOfInterest.filter((option) =>
                                values.multiInterest.find((value) => value === option.value)
                            )}
                            onChange={(selected) => {
                                setFieldValue(
                                    'multiInterest',
                                    selected ? selected.map((option) => option.value) : []
                                );
                            }}
                            onBlur={() => validateField(values.multiInterest, setErrorInterest, 'Please select at least 1 area.')}
                            error={errorInterest}
                        />
                    </Col>
                    <Col xs={12} lg={6}>
                        <SelectMultiConponent
                            label="What countries are you interested in?"
                            id='multiCountries'
                            name='multiCountries'
                            options={areaOfCountries}
                            value={areaOfCountries.filter((option) =>
                                values.multiCountries.find((value) => value === option.value)
                            )}
                            onChange={(selected) => {
                                setFieldValue(
                                    'multiCountries',
                                    selected ? selected.map((option) => option.value) : []
                                );
                            }}
                            onBlur={() => validateField(values.multiCountries, setErrorCountries, 'Please select at least 1 country.')}
                            error={errorCountries}
                        />
                    </Col>
                </Row>

                <Row className=''>
                    <Col xs={12} lg={6}>
                        <div className="d-grid py-2">
                            <Button type='button' onClick={handlePrevious}
                                variant="primary fw-bold text-uppercase" size="lg">
                                Previous
                            </Button>
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className="d-grid py-2">
                            <Button type='submit'
                                variant="primary fw-bold text-uppercase" size="lg">
                                Submit
                            </Button>
                        </div>
                    </Col>

                </Row>

            </Form>
        </>
    )
}

export default StepTwoComponent