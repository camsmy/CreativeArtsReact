import { useEffect, useRef,useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

function RegisteredComponent() {
    const isMountedRef = useRef(false);
    const [contentDetails, setContents] = useState([])

    useEffect(() => {
        if (!isMountedRef.current) {
            isMountedRef.current = true;
            axios.get('http://localhost:3000/stepOne')
                .then(response => {
                    const stepOneData = response.data;
                    const latestID = stepOneData.sort((a, b) => b.id - a.id)[0].id;
                    stepOneData.map(e=>{
                        if(e.id === latestID){
                            setContents(e)
                        }
                    })
                })
                .catch(error => {
                    console.log(error);
                });

            return () => {
                // console.log("unmounting page card contents");
            };
        }
    }, []);
    return (
        <>
            <h2 className='text-center py-3'>Your Registration Is Complete 🎉</h2>
            <div className='confirmation--container d-flex flex-column flex-lg-row mb-5'>

                <div className="confrimation--cut p-3 d-grid justify-content-center align-items-center">
                    <div className="flip d-grid justify-content-center align-items-center">
                        <div className="d-lg-none">
                            <div className='confirmation--cut__eventTitle px-5'>
                                <h3 className='text-uppercase text-center m-0'>admit one</h3>
                            </div>
                            <div className="d-flex gap-2 gap-md-5 pt-2 flex-column flex-md-row">
                                <div className='text-uppercase'>
                                    <p className='confirmation--cut__title m-0'>GUEST</p>
                                    <p className='confirmation--cut__info m-0'>{`${contentDetails.firstName} ${contentDetails.lastName}`}</p>
                                </div>
                                <div className='text-uppercase '>
                                    <p className='confirmation--cut__title m-0'>Education</p>
                                    <p className='confirmation--cut__info m-0'>{contentDetails.selectLevel}</p>
                                </div>
                                <div className='text-uppercase '>
                                    <p className='confirmation--cut__title m-0'>Contact Number</p>
                                    <p className='confirmation--cut__info m-0'>{contentDetails.mobileNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-none d-lg-block">
                            <div className='confirmation--cut__eventTitle py-5'>
                                <h3 className='text-uppercase text-center m-0'>admit one</h3>
                            </div>
                            <div className='text-uppercase px-2'>
                                <p className='confirmation--cut__title m-0'>GUEST</p>
                                <p className='confirmation--cut__info m-0'>{`${contentDetails.firstName} ${contentDetails.lastName}`}</p>
                            </div>
                            <div className='text-uppercase '>
                                <div className='gap-5 d-flex'>
                                    <div className='px-2'>
                                        <p className='confirmation--cut__title m-0'>Education</p>
                                        <p className='confirmation--cut__info m-0'>{contentDetails.selectLevel}</p>
                                    </div>
                                    <div className='px-2'>
                                        <p className='confirmation--cut__title m-0'>Contact Number</p>
                                        <p className='confirmation--cut__info m-0'>{contentDetails.mobileNumber}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="confirmation--barcode d-grid justify-content-center align-items-center pt-2">
                        <img src="https://www.pngkey.com/png/full/131-1318296_barcode-svg-ticket-code-barre-ticket-de-caisse.png" alt="barcode"
                            className='img-fluid' />
                    </div>

                </div>
                <div
                    className="confirmation--main ps-3">
                    <Col
                        className='confimartion--content p-3'>
                        <h2 className='confirmation--title text-white'>
                            {contentDetails.selectFair}
                        </h2>
                        <h3 className='confirmation--subtitle text-white'>
                            Virtual Fair
                        </h3>

                        <div className='text-uppercase d-flex text-white py-2 gap-2'>
                            <p className='confirmation--main__title m-0'>Ticket Owner:</p>
                            <p className='confirmation--main__title  m-0'>{`${contentDetails.firstName} ${contentDetails.lastName}`}</p>
                        </div>

                        <Row className='pt-5'>
                            <Col className='text-uppercase px-2 py-1 text-white'>
                                <p className='confirmation--main__title  m-0'>Time</p>
                                <p className='confirmation--info m-0'>11:00AM - 12:00PM</p>
                            </Col>
                            <Col className='text-uppercase px-2 py-1 text-white'>
                                <p className='confirmation--main__title m-0'>Location</p>
                                <p className='confirmation--info  m-0'>Qatar</p>
                            </Col>
                        </Row>

                        <Col
                            className='confirmation--fineprint py-3 text-white'>
                            <p className='text-uppercase m-0'>
                                An electronic copy of your ticket has been sent to your email
                                {contentDetails.email}. Please arrive 1 hour before the event.
                            </p>
                        </Col>
                    </Col>
                </div>

            </div>

        </>
    )
}

export default RegisteredComponent