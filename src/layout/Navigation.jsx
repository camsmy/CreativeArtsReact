import logo from "../assets/images/logo.png"
import mobileLogo from "../assets/images/mobile-logo.svg"
import { useEffect, useState } from 'react'
import { Link,useLocation } from 'react-router-dom'
import { Container, Nav,Navbar } from 'react-bootstrap'
import PrimaryButton from "../components/Buttons/PrimaryButton"

function Navigation() {
  const [navbarScroll, setNavbar] = useState(false)
  const location = useLocation()

  const changeBackground = () => {
    if (window.scrollY >= 66 || location.pathname === "/register" || window.innerWidth <= 992 ) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })
  return (
    <Navbar collapseOnSelect expand="lg" bg={navbarScroll ? 'light' : ''} className="navbar-light fixed-top">
      <Container className='container-xl'>
        <Link to="/" className="navbar-brand">
            <img src={logo} alt="Website logo img-nav"
              className='img-fluid img-nav d-none d-lg-block' />
            <img src={mobileLogo} alt="mobilelogo" className="img-fluid d-lg-none mobilelogo" />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav"
          className="responsive-navbar-nav justify-content-end">
          <Nav className='d-flex gap-1 gap-lg-4'>

            <Nav.Link as={Link} to="/events">
              EVENTS
            </Nav.Link>
            <Nav.Link as={Link} to="/seminar">
              seminars
            </Nav.Link>           
            <Nav.Link as={Link} to="/exhibitors">
              exhibitors
            </Nav.Link>           
            <Nav.Link as={Link} to="/faq">
              faq
            </Nav.Link>
            <Link to="/register">
              <PrimaryButton name="Register" />
            </Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation