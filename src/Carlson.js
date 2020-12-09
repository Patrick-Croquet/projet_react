import React from 'react';
import styled from 'styled-components';
import { Card, CardGroup } from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import homeBcgCropped from './assets/homeBcg.jpg';
import CarlsonButton from './Effets/CarlsonButton';
import CarlsonTextes from './Effets/CarlsonTextes';


export const Carlson = () => (
    <Styles>
        <CardGroup className="center">
            <Row className="marge">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={require('./assets/CarlsonCard1.png')} alt="Carlson Card image"/>
                        <Card.Body>
                            <Card.Title className="poiretRubriques center">Biographie</Card.Title>
                            <Card.Text className="poiretTwo">
                            Née en Californie, Carolyn Carlson se définit avant tout comme une nomade. De la baie de San Francisco à l’Université d’Utah, de la compagnie d’Alwin Nikolais à New York à celle d’Anne Béranger en France, de l’Opéra de Paris au Teatrodanza La Fenice à Venise, du Théâtre de la Ville à Helsinki, du Ballet de l’Opéra de Bordeaux à la Cartoucherie de Paris, de la Biennale de Venise à Roubaix, Carolyn Carlson est une infatigable voyageuse, toujours en quête de développer et faire partager son univers poétique.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Img variant="top" src={require('./assets/CarlsonCard2.png')} alt="Carlson Card image"/>
                        <Card.Body>
                            <Card.Title className="poiretRubriques center">Parcours</Card.Title>
                            <Card.Text className="poiret">
                            1965-1971 :
                            Soliste dans la compagnie d’Alwin Nikolais
                            <div></div>
                            1974-1980 :
                            Etoile-Chorégraphe au Ballet de l’Opéra de Paris (GRTOP)
                            <div></div>
                            1980-1984 :
                            Directrice artistique du Teatrodanza La Fenice, Venise
                            <div></div>
                            1985-1991 :
                            Résidence au Théâtre de la Ville, Paris
                            <div></div>
                            1991-1992 :
                            Résidence au Finnish National Ballet et au Helsinki City Theater
                            <div></div>
                            1994-1995 :
                            Directrice artistique du Ballet Cullberg, Stockholm
                            <div></div>
                            1999-2002 :
                            Directrice artistique de la section danse de la Biennale de Venise
                            <div></div>
                            Depuis 1999 :
                            Fondatrice et présidente d’honneur de l’Atelier de Paris-Carolyn Carlson
                            <div></div>
                            2004-2013 :
                            Directrice du Centre Chorégraphique National Roubaix Nord-Pas de Calais
                            <div></div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Card className="margeTwo">
                <Row className="center">
                    <Col md={{ span: 4, offset: 1 }}>
                        <Card.Img variant="top" src={require('./assets/homecarlson.png')} alt="Carlson Card image"/>
                        <Card.Body>
                            {/* <Card.Title className="poiretRubriques">Carolyn Carlson Company</Card.Title> */}
                        </Card.Body>
                    </Col>
            
                    <Col md={{ span: 4, offset: 1 }}>
                        <Card.Text className="poiretRubriques">
                            Depuis 2014, Carolyn Carlson est directrice artistique de la Carolyn Carlson Company.
                            <div></div>
                            <a class="btn btn-dark" href="http://carolyn-carlson.com/" target="_blank" rel="noopener noreferrer" role="button">Visit Site</a>
                        </Card.Text>
                    </Col>
                </Row>

                <Row className="center">
                    <Col >
                        <CarlsonButton>
                            <CarlsonTextes />
                        </CarlsonButton>
                    </Col>
                </Row>
            </Card>
        </CardGroup>

        <Jumbotron fluid className="jumboBack">
            <Container>
                <Image className="star" src={require('./assets/reactStar.png')} />
                <h1 className="poiretTitre">Carolyn Carlson</h1>
            </Container>
        </Jumbotron>
    </Styles>
   
)


const Styles = styled.div`
    .center {
        text-align: center;
    }
    .poiretRubriques {
        font-family: "Poiret One", cursive;
        color: #121212;
        text-transform: uppercase;
        font-size: 2em;
    }
    .poiretTwo {
        font-family: "Poiret One", cursive;
        color: #121212;
        font-size: 1.2em;
        padding-bottom: 2.7em;
    }
    .poiret {
        font-family: "Poiret One", cursive;
        color: #121212;
        font-size: 1em;
    }
    .marge {
        margin-top: 3em;
    }
    .margeTwo {
        margin-top: 3em;
        padding-top: 3em;
    }

    .jumboBack {
        background: url(${homeBcgCropped}) no-repeat center;
        background-size: cover;
        margin-top: 3em;
        margin-bottom: 0;
        height: 150px;
    }
    .poiretTitre {
        font-family: 'Poiret One', cursive;
        color: #E4E3E2;
        font-size: 2em;
        text-transform: uppercase;
    }
`
