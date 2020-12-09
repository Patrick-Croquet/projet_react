import React from 'react';
import styled from 'styled-components';
import homeBcgCropped from './assets/homeBcg.jpg';
import { Jumbotron, Button } from 'react-bootstrap';
import { Image, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const Home = () => (
    <Styles>
        <Container className="homeBack">
            <div>
                <Row>
                    <Col >
                        <Link to="/khan"><Image className="photo" src={require('./assets/homekhan.png')} rounded /></Link>
                    </Col>
                    <Col >
                        <Link to="/carlson"><Image className="photo" src={require('./assets/homecarlson.png')} rounded /></Link>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <Link to="/preljocaj"><Image className="photo" src={require('./assets/homepreljocaj.png')} rounded /></Link>
                    </Col>
                    <Col >
                        <Link to="/contact"><Image className="photo" src={require('./assets/homenews.png')} rounded /></Link>
                    </Col>
                </Row>
            </div>
            
            <Jumbotron className="jumboBack text-center">
                <h1 className="monoton">Modern Choreographers</h1>
                <div><br></br></div>
                <div><br></br></div>
                <Link to="/khan">
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Button variant="light" className="poiret">Enter</Button>
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Image className="star" src={require('./assets/reactStar.png')} />
                </Link>
            </Jumbotron>
        </Container>
    </Styles>
)


const Styles = styled.div`
    .homeBack {
        background-color: #121212;
        opacity: 0.9;
        text-align: center;
    }
    .jumboBack {
        background: url(${homeBcgCropped}) no-repeat center;
        background-size: cover;
        margin-bottom: 0;
        border: 1px solid #E4E3E2;
    }
    .photo {
        margin-top: 2.7em;
        margin-bottom: 2.7em;
        border: solid 1px #E4E3E2;
    }
    .photo:hover {
        border: solid 1px #121212;
    }
    .star {
        margin-right: 1em;
        margin-left: 1em;
    }
    .monoton {
        font-family: Monoton, cursive;
        color: #E4E3E2;
        text-transform: uppercase;
        font-size: 4em;
        letter-spacing: 0.3em;
    }
    .poiret {
        font-family: "Poiret One", cursive;
        color: #121212;
        text-transform: uppercase;
        font-size: 1.5vw;
        letter-spacing: 0.8em;
    }
    .poiret:hover {
        color: black;
        opacity: 0.5;
        border: solid 1px #121212;
    }
`;