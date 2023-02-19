import { Container, Row, Col,Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='footer-image mt-5 '>
      <Container>
        <Row>
          <Stack direction="horizontal" gap={3} 
          className="d-flex justify-content-md-end justify-content-center">
            <FontAwesomeIcon icon={faFacebookF} size="lg"
              className="bg-white rounded-circle p-2 text-center footer--color-facebook " />
              <FontAwesomeIcon icon={faInstagram} size="lg"
              className="bg-white rounded-circle p-2 text-center footer--color-instagram" />
          </Stack>
        </Row>
        <div>
          <Row className='d-flex mt-3
          flex-md-row justify-content-md-between text-md-start
          flex-column text-center'>
            <Col>
              <p className='text-white footer-text'>&#169; All Rights Reserved</p>
            </Col>
            <Col className='d-flex justify-content-md-end justify-content-center'>
              <p className='text-white footer-text'>Privacy Policy</p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer