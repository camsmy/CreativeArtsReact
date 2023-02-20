import { Container, Row, Col, Card } from 'react-bootstrap'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import CardItems from "../../Cards/CardItems"
import PrimaryButton from "../../Buttons/PrimaryButton"
import { Link } from 'react-router-dom'

function CardContents() {
  const isMountedRef = useRef(false);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      axios
        .get("http://localhost:3000/card")
        .then((response) => {
          const newContents = response.data.map((item) => ({
            id: item.id,
            icon: item.icon,
            title: item.title,
            body: item.body,
          }));
          setContents([...contents, ...newContents]);
        })
        .catch((error) => console.log(error));

      return () => {
      };
    }
  }, []);
  return (
    <section className=''>
      <Container className=''>
        <Card className='card-info'>
          <Card.Body className='card-body p-3 p-md-5'>
            <Row className='d-flex'>
              <Col xs={12} md={6}
                className='card--info_location
                  d-grid justify-content-md-end
                  border-md-end border-md-1 border-dark py-3 pe-md-5 text-center'>
                <Card.Title className='card-title'>Qatar</Card.Title>
                <Card.Title className='card-title2'>March 11th & 12th</Card.Title>
                <Card.Subtitle>4:00 pm to 7:30 pm</Card.Subtitle>
              </Col>
              <Col xs={12} md={6}
                className='d-flex flex-column py-3 justify-content-center
                align-items-center ps-md-5
                align-items-lg-start'>
                <Card.Subtitle>Hilton Qatar</Card.Subtitle>
                <Card.Text>483 Lion Street<br />1930</Card.Text>
              </Col>
            </Row>

            <Card.Title className='text-center fw-bold py-4 card-title3'>
              Invest in your career. Find your perfect course.
            </Card.Title>

            <Container fluid>
              <Row>
                {
                  contents.map(items => (
                    <CardItems key={items.id} iconName={items.icon} title={items.title} body={items.body} />
                  )
                  )
                }
              </Row>
            </Container>

            <Row className="d-flex justify-content-center align-items-center mt-5">
              <Col lg={9}>
                <Link to="/change">
                  <PrimaryButton name="Click to change city to abu dhabi" />
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>

  )
}

export default CardContents