import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Home.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import image1 from '../image1.png'
import image2 from '../image2.png'
import image3 from '../image3.png'
import money from '../money.svg'
import check from '../check.svg'
import clock from '../clock.svg'
import logo from '../logo.svg';



class Home extends Component{
    render(){
        return(
            <div className="main">
                <Navbar className="justify-content-center myNavbar" fixed="top">
                    <Container>
                        <Nav className="me-auto">
                            <Navbar.Brand href="./Pages/home">
                            <img
                              src={logo}
                                width="90"
                                height="30"
                                className="d-inline-block align-top logo"
                                alt="logo"
                            />
                            </Navbar.Brand>
                            <Nav.Link href="./Pages/home">Active</Nav.Link>
                            <Nav.Link href="./Pages/home">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <div className="header">
                    <Container className="Banner">
                        <Row>
                            <Col id="banner">
                                <p id="text"><b>Hire <span id="color">quality</span></b></p>
                                <p id="text1"><b>candidates easily</b></p>
                                <br></br><br></br>
                                <p id="paragraph1">
                                    Most convenient method of recruiting.
                                    Our all-in-one, user-friendly recruitment platform 
                                    for businesses to employ qualified candidates
                                </p>
                                <Button className="text-left" variant="primary" id="button1">Get started</Button>{' '}
                            </Col>
                            <Col>
                                <img 
                                    src={image1} 
                                    alt="hader image" 
                                    width="700"
                                    height="500"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                        </Row>
                    </Container>

                    <div className="underBanner">
                        <p><b>Tailored to your recruitment specifications</b></p>
                    </div>
                </div>

                <div className="grid1">
                    <Container>
                        <Row  className="justify-content-center">
                            <Col className="col-5 g1-col1">
                                <a href='#'>
                                    <img id="image2" src={image2} width="400" height="300"/>
                                </a>
                            </Col>
                            <Col className="col-5 g2-col2">
                                <a href='#'>
                                    <img id="image3" src={image3} width="400" height="300"/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="grid2">
                    <p className="text2">Our <span className="ourSolution">solution</span></p>
                    <Container id="g2-container">
                        <Row>
                            <Col className="g1-col1 col-5">
                                <p className="text">Automated Hiring</p>
                                <p className="solution">
                                    Hyreman automates the early recruiting process by assessing 
                                    fundamental job-related abilities, reducing hundreds of applicants 
                                    to only the best-qualified individuals with the best chance of 
                                    succeeding. Passing grades may be changed to meet your best 
                                    performers with standards. 
                                </p>
                            </Col>
                            <Col className="g1-col2 col-5">
                                <p className="text">Expert Hiring</p>
                                <p className="solution">
                                    Hyreman automates the early recruiting process by assessing 
                                    fundamental job-related abilities, reducing hundreds of applicants 
                                    to only the best-qualified individuals with the best chance of 
                                    succeeding. Passing grades may be changed to meet your best 
                                    performers with standards. 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    {/* <Button variant="primary" className="button">Get Started</Button>{' '} */}
                </div>

                <div className="grid3">
                    <p className="text2">Why <span>choose</span> Hyreman for your next hiring</p>
                    <Container id="g3-container3">
                        <Row>
                            <Col>
                                <img src={clock}/>
                                <br/>
                                <b>Save Time</b>
                                <br/>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Leo sed vivamus viverra egestas eget ut. Lacinia dolor eget ut egestas.
                                </span>
                            </Col>
                            <Col>
                                <img src={check}/>
                                <br/>
                                <b>Save Time</b>
                                <br/>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Leo sed vivamus viverra egestas eget ut. Lacinia dolor eget ut egestas.
                                </span>
                            </Col>
                            <Col>
                                <img src={money}/>
                                <br/>
                                <b>Save Time</b>
                                <br/>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Leo sed vivamus viverra egestas eget ut. Lacinia dolor eget ut egestas.
                                </span>
                            </Col>
                        </Row>
                    </Container>
                    <Button variant="primary" className="button">Get Started</Button>{' '}
                </div>

                <div className="grid4">
                    <Container>
                        <Row>
                            <Col className='col-5'>
                                <h1>Transform the way you recruit with <span>Hyreman</span></h1>
                            </Col>
                            <Col className='col-7'>
                                <h4>Request a free demo and quote</h4>
                                <p>Find out how Hyreman can help you recruit better now! Complete the form below and we will contact you...</p>
                                <form>
                                    <input type="text" class="input" placeholder="Fisrt Name"></input>
                                    <input type="text" class="input" placeholder="Surname"></input>
                                    <br/><br/>
                                    <input type="text" class="input" placeholder="Company Name"></input>
                                    <input type="text" class="input" placeholder="Job Title"></input>
                                    <br/><br/>
                                    <input type="text" class="input" placeholder="Email"></input>
                                    <input type="text" class="input" placeholder="Phone Number"></input>
                                    <br/><br/>
                                    <textarea rows="8" cols="80" placeholder="Message"></textarea>
                                    <br/><br/><br/>
                                    <Button variant="primary" className="button">Submit Request</Button>{' '}
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <footer>
                    <p>Copyright © 2022 Hyreman. All rights reserved.</p>
                    {/* <Container>
                        <Row>
                            <Col>1 of 3</Col>
                            <Col>2 of 3</Col>
                            <Col>3 of 3</Col>
                            <Col>4 of 4</Col>
                        </Row>
                    </Container> */}
                </footer>
            </div>
        )
    }
};

export default Home;