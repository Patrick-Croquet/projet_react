import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';


export const Layout = (props) => (
    <Styles>
        <div className="colorAround">
            <Container>
                {props.children}
            </Container>
        </div>
    </Styles>
)


const Styles = styled.div`
    .colorAround {
        background-color: #121212;
    }
`