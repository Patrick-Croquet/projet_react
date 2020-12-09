import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import homeBcgCropped from './assets/homeBcg.jpg';
import KhanButton from './Effets/KhanButton';
import KhanTextes from './Effets/KhanTextes';


export const Khan = () => (
    <Styles>
        <Carousel className="carroussel">
            <Carousel.Item className="center">
                <img
                className="khanImages"
                src={require('./assets/CarouselKhan1.png')}
                alt="First slide"
                />
                <Carousel.Caption>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <p className="poiret">"Vertical Road", AKRAM KHAN</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="center">
                <img
                className="khanImages"
                src={require('./assets/CarouselKhan2.png')}
                alt="Second slide"
                />
                <Carousel.Caption>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <p className="poiret">"Giselle", AKRAM KHAN</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="center">
                <img
                className="khanImages"
                src={require('./assets/CarouselKhan3.png')}
                alt="Third slide"
                />
                <Carousel.Caption>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <p className="poiret">"Outwitting The Devil", AKRAM KHAN</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className="center">
                <img
                className="khanImages"
                src={require('./assets/CarouselKhan4.png')}
                alt="Fourth slide"
                />
                <Carousel.Caption>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <p className="poiret">"Giselle", AKRAM KHAN</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


        <Container className="center">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <p className="poiretAmorce">Maître de kathak (danse classique indienne) et chorégraphe contemporain,
                    Akram Khan est loué pour la vitalité et l’innovation qu’il apporte à l’expression interculturelle et interdisciplinaire,
                    questionnant les idées conventionnelles sur la danse traditionnelle ou contemporaine,
                    entre tradition et innovation, entre Orient et Occident.</p>
                    <KhanButton>
                        <KhanTextes />
			        </KhanButton>
                </Col>
            </Row>
        </Container>


        <Jumbotron fluid className="jumboBack">
            <Container>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <h1 className="poiretTitre">Akram Khan</h1>
            </Container>
        </Jumbotron>
    </Styles>
)


const Styles = styled.div`
    .poiretTitre {
        font-family: 'Poiret One', cursive;
        color: #E4E3E2;
        font-size: 2em;
        text-transform: uppercase;
    }
    .carroussel {
        padding-top: 3em;
        padding-bottom: 3em;
    }
    .khanImages {
        height: 550px;
        width: 825px;
    }
    .poiret {
        font-family: "Poiret One", cursive;
        font-size: 1.5vw;
        letter-spacing: 0.3em;
    }
    .center {
        text-align: center;
    }
    .poiretAmorce {
        font-family: 'Poiret One', cursive;
        font-size: 1.3em;
        text-transform: uppercase;
        letter-spacing: 0.3em;
        margin-top: 4em;
        margin-bottom: 4em;
        color: #E4E3E2;
    }
    .jumboBack {
        background: url(${homeBcgCropped}) no-repeat center;
        background-size: cover;
        margin-top: 2em;
        margin-bottom: 0;
        height: 150px;
    }
`;