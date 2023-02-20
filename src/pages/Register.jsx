import { useState, useEffect } from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import RegisteredComponent from '../components/Pages/RegisterPage/RegisteredComponent';
import StepOneComponent from '../components/Pages/RegisterPage/StepOneComponent';
import StepTwoComponent from '../components/Pages/RegisterPage/StepTwoComponent';

const Register = () => {
    const [key, setKey] = useState('step1');
    const [disableTab1, setdisableTab1] = useState(true)
    const [disableTab2, setdisableTab2] = useState(true)
    const [prevClick, setPrevClick] = useState(false)
    const [completeForm, setCompleteForm] = useState(false)
    const [changeBG, setChangeBg] = useState(true)


    const changeBackground = () => {
        if (window.innerWidth <= 992) {
            setChangeBg(false)
        } else {
            setChangeBg(true)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("resize", changeBackground)
    })

    return (
        <>
            <header className='d-flex align-items-center position-relative pb-5 '>
                {/* <div className="clipped--register py-5 home-bg"> */}
                <div className={changeBG ? "header--register__background py-5" : "clipped--register pb-5"}>
                    <div className="overlay--register"></div>
                    <Container className="py-5">
                        <Row className="py-5">
                            <h1 className='text-white 
                            header--register__title
                            display-1 text-center'>REGISTRATION</h1>
                        </Row>
                    </Container>
                </div>
            </header>

            <svg className="svg ">
                <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M1,0 H0 V0.895 C0,0.895,0.226,1,0.492,0.995 C0.661,0.974,0.846,0.889,1,0.742 V0"></path></clipPath>
            </svg>


            <section className='register-container'>
                <Container>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="register-tab"
                    >
                        <Tab eventKey="step1" title="STEP 1" disabled={disableTab1}>
                            <h2 className='tab1--title pb-3'>About you</h2>
                            <StepOneComponent
                                setdisableTab2={setdisableTab2}
                                setKey={setKey}
                                backButton={prevClick}
                            />
                        </Tab>

                        <Tab eventKey="step2" title="STEP 2" disabled={disableTab2}>
                            {
                                !completeForm ?
                                    <>
                                        <h2 className='tab1--title pb-3'>Select your interests:</h2>
                                        <StepTwoComponent
                                            setdisableTab1={setdisableTab1}
                                            setdisableTab2={setdisableTab2}
                                            setKey={setKey}
                                            backButton={setPrevClick}
                                            isComplete={setCompleteForm}
                                        />
                                    </>
                                    :
                                    <div>
                                        <RegisteredComponent />
                                    </div>
                            }
                        </Tab>
                    </Tabs>
                </Container>
            </section>

        </>
    )
}

export default Register