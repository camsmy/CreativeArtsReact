import { Container, Row, Col } from "react-bootstrap"

function PageNotExist() {
  return (
    <>
    <Container>
      <Row>
        <Col className="vh-100 w-100
        d-flex justify-content-center align-items-center
        my-5 my-5">
            <img src="https://asia-exstatic.vivo.com/static/img/error/404-PC_31daffa.png"
            alt="image 404" 
            className="img-fluid"/>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default PageNotExist