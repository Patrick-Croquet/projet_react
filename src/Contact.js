import React from 'react';
import styled from 'styled-components';
import { Jumbotron, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Col, Button } from 'react-bootstrap';
import homeBcgCropped from './assets/homeBcg.jpg';


export const Contact = () => (
    <Styles>
        <Jumbotron fluid className="jumboBack">
            <Container>
                <Image src={require('./assets/reactStar.png')} />
                <h1 className="poiretTitre">News & Contact</h1>
            </Container>
        </Jumbotron>

        <Form className="formStyle labelStyle">
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="123 rue de Paris" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Other information" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Code postal"/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" value="Choose...">
                    <option>Select your country</option>
                    <option>USA</option>
                    <option>France</option>
                    <option>UK</option>
                    <option>Deutschland</option>
                    <option>Other</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Button variant="dark" type="submit" className="bouton">
                        SEND
                    </Button>
                    <Image className="star" src={require('./assets/reactStar.png')} />
                    <Image className="star" src={require('./assets/reactStar.png')} />
                </Col>
            </Form.Row>
        </Form>        
    </Styles>
)


const Styles = styled.div`
    .jumboBack {
        background: url(${homeBcgCropped}) no-repeat center;
        background-size: cover;
        margin-bottom: 5em;;
        height: 100px;
    }
    .poiretTitre {
        font-family: 'Poiret One', cursive;
        color: #E4E3E2;
        font-size: 2em;
        text-transform: uppercase;
    }
    .formStyle {
        background: url(${homeBcgCropped}) no-repeat center;
        background-size: cover;
    }
    .labelStyle {
        font-family: "Poiret One", cursive;
        color: #E4E3E2;
        font-size: 1.3em;
        text-transform: uppercase;
    }
    .bouton {
        letter-spacing: 0.5em;
        font-size: 1.1em;
        margin-bottom: 2em;
        margin-top: 1em;
    }
    .star {
        margin-right: 1em;
        margin-left: 1em;
        margin-bottom: 2em;
        margin-top: 1em;
    }
`;