import { Container, Row, Col } from 'react-bootstrap'
import PrimaryButton from "../components/PrimaryButton"
import CardContents from "../components/CardContents"
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Home = () => {
  const [changeBG, setChangeBg] = useState(true)

  const changeBackground = () => {
    if(window.innerWidth <= 992){
      setChangeBg(false)
  }else{
    setChangeBg(true)
  }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("resize", changeBackground)
  })
  return (
    <>
    <header className='d-flex align-items-center position-relative pb-5'>
        <div className={changeBG ? "header--home__background pb-5 home-bg" : "clipped--home pb-5 home-bg"}>
          <div className="overlay"></div>
          <Container className="pb-5">
            <Row className="py-5">
              <Col lg={6} className="d-grid gap-2 py-5">
                <h1 className='header--title text-md-start text-center'>
                  Canadian Creative Arts Education Virtual Fair
                </h1>

                <p className="header--paragraph ">Your opportunity to speak directly with over 20 Universities and Colleges from Canada specialized in creative arts.</p>

                <p className="header--paragraph ">Explore a career in Interactive (Mobile, Web Design, Multimedia); Audiovisual (Animation, Film, Video, Audio), Digital Marketing, Virtual Reality, Art, Video Games, and much more.</p>
                <Link to="/register">
                  <PrimaryButton name="REGISTER TO ATTEND" />
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <svg className="svg ">
        <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox"><path d="M1,0 H0 V0.895 C0,0.895,0.226,1,0.492,0.995 C0.661,0.974,0.846,0.889,1,0.742 V0"></path></clipPath>
      </svg>


      <div className="w-100 card--container">
        <Container className="h-100">
          <div>
            <CardContents />
          </div>
        </Container>
      </div>

    </>
  )
}

export default Home