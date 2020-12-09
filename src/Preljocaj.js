import React from 'react';
import styled from 'styled-components';
// import { Carousel } from 'react-bootstrap';
import { Jumbotron, Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import homeBcgCropped from './assets/homeBcg.jpg';


export const Preljocaj = () => (
  <Styles>
    <Jumbotron fluid className="jumbo jumboBack">
      <div className="overlay"></div>
      <Container>
        <Image className="star" src={require('./assets/reactStar.png')} />
        <h1 className="poiretTitre">Angelin Preljocaj</h1>
        <p className="poiretConstruction">Page en construction</p>
      </Container>
    </Jumbotron>
  </Styles>
)


const Styles = styled.div`
  .jumboBack {
    background: url(${homeBcgCropped}) no-repeat center;
    background-size: cover;
    margin-bottom: 0;
    border: 1px solid #E4E3E2;
    height: 90vh;
  }
  .poiretTitre {
    font-family: 'Poiret One', cursive;
    color: #E4E3E2;
    text-transform: uppercase;
    font-size: 2em;
  }
  .poiretConstruction {
    font-family: 'Poiret One', cursive;
    color: #E4E3E2;
    text-transform: uppercase;
    font-size: 3.5em;
  }
`