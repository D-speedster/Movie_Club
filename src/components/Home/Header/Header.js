import React from 'react'

import { Nav, Navbar, Container, Offcanvas, Button, NavDropdown, Form, Col, Row } from 'react-bootstrap'
import './Header.css';
import { FcHome } from "react-icons/fc";
import { RiMovie2Fill } from "react-icons/ri";
import { BiMoviePlay } from "react-icons/bi";
import { GiPerspectiveDiceFour } from "react-icons/gi";
import { AiFillPhone } from "react-icons/ai";
import { BsSun } from "react-icons/bs"
import { FiUserPlus } from "react-icons/fi"
import { MdHome } from "react-icons/md"
import { Link } from 'react-router-dom';


export default function Header() {
    let ThemColor = (event) => {
        console.log(event.target.classList.toggle("fa-moon"))
        document.querySelector('.body').style.background = 'white'
    }
    return (
        // <div className='Header_Nav'>
        //     <Container>

        //     </Container>
        // </div>
        <div>
            <div className='Header_Top'>
                <Container>

                    <Row className='justify-content-center text-end '>
                        <Col className='Logo_Web mt-3'>
                            <img width='250px' src='/img/movie-club-banner-2x.png' className='img-fluid'></img>


                        </Col>

                        <Col className='Login_Register mt-3'>
                            <div className='d-flex float-start'>
                                <Button variant='danger' className='me-3 Login_Btn'>ورود</Button>
                                <Button className='me-3 Register_Btn'>ثبت نام</Button>
                            </div>
                        </Col>
                    </Row>

                </Container>



            </div>
            <div>
                {['lg'].map((expand) => (
                    <Navbar key={expand} expand={expand} >
                        <Container >
                            <Navbar.Brand href="#" >
                                {/* <img style={{ height: '65px', marginTop: '7px', width: '120px' }} className='img-fluid' src='/img/MOVIECLUBLOGO.png' /> */}

                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className='justify-content-between'>
                                    <Nav>
                                        <Nav.Link href='#Home' className=''>
                                            <Link to='/'>
                                                <MdHome style={{ color: '#db3163', fontSize: '26px' }}></MdHome>

                                                خانه
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <Link to='/Movies'>
                                                <RiMovie2Fill style={{ color: '#db3163', fontSize: '26px' }}></RiMovie2Fill>
                                                دانلود فیلم
                                            </Link>
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#db3163', fontSize: '26px' }}></BiMoviePlay>
                                            دانلود سریال
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#db3163', fontSize: '26px' }}></BiMoviePlay>
                                            انیمیشن | انیمه
                                        </Nav.Link>
                                        <Nav.Link>
                                            <BiMoviePlay style={{ color: '#db3163', fontSize: '26px' }}></BiMoviePlay>
                                            اخبار
                                        </Nav.Link>




                                    </Nav>

                                    <Col lg={4} className='Search'>
                                        <input type='search' placeholder='اسم فیلم را وارد نمایید' className='form-control bg-secondary search_btn'></input>
                                        <div className='Result_Search'>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>
                                            <h6>Avenger</h6>

                                        </div>
                                    </Col>

                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </div>
    )
}
