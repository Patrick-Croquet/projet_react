import React from 'react';
import styled from 'styled-components';


export const Footer = () => (
    <Styles>
        <div>
            <p className="footerStyle">modern choreographers - 2020 - anne desopper</p>
        </div>
    </Styles>
)


const Styles = styled.div`
.footerStyle {
    font-family: 'Poiret One', cursive;
    text-transform: uppercase;
    background-color: #343A40;
    color: #E4E3E2;
    text-align: center;
    font-size: 0.8em;
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    border-top: 1px solid #E4E3E2;
}
`