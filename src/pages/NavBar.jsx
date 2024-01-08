import React from 'react'
import {Navbar , Container, Nav} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import '../global.css'

const NavBar = () => {

  const [Activelink, setActivelink] = useState("home")
  const [scrolled, setscrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setscrolled(true)
      } else {
        setscrolled(false)
      }
    }
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)

  }, [])

const onUpdateActiveLink = (value)=>{
  setActivelink(value)
}
  return (

    <Navbar expand="lg" className='bg-black text-white'>
      <Container>
        <Navbar.Brand href="#home">KUMKUM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" className= {Activelink === "Home" ?"active nav-link" : 'nav-link '} onClick ={()=>onUpdateActiveLink('Home')} >Home</Nav.Link>
            <Nav.Link href="#About" className= {Activelink === "Skills" ?"active nav-link" : 'nav-link '} onClick ={()=>onUpdateActiveLink('Skills')} >Skills</Nav.Link>
            <Nav.Link href="#Services" className= {Activelink === "Projects" ?"active nav-link" : 'nav-link '} onClick ={()=>onUpdateActiveLink('Projects')} >Projects</Nav.Link>
            <Nav.Link href="#Contact" className= {Activelink === "Contact" ?"active nav-link" : 'nav-link '} onClick ={()=>onUpdateActiveLink('Contact')} >Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
              <a href="#"><i class="ri-github-line"></i></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}

export default NavBar