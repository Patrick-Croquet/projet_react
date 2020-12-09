import React, { Component } from "react";
import styled from 'styled-components';

class KhanTextes extends Component {	 
	render() {
		return (
            <Styles>
                <div>
                    <h2 className="poiretTitre">Biographie</h2>
                    <p className="bordure">Son langage chorégraphique, dont les sources d’inspiration traversent les frontières, se distingue par son style narratif, sans faire pour autant de compromis artistiques. Chaque production puise ses racines dans le kathak classique et la danse moderne, pour les faire évoluer de concert.
                        <br/> Ses collaborations précédentes incluent le National Ballet of China, l’actrice Juliette Binoche, la danseuse ballerine Sylvie Guillem, le danseur et chorégraphe Sidi Larbi Cherkaoui et Israel Galván, la chanteuse Kylie Minogue, les artistes visuels Anish Kapoor, Antony Gormley et Tim Yip, l’écrivain Hanif Ku - reishi ainsi que les compositeurs Steve Reich, Nitin Sawhney, Jocelyn Pook et Ben Frost.
                        <br/> La Akram Khan Company a été primée à plusieurs reprises, tout particulièrement pour DESH qui a reçu l’Olivier Award (Best New Dance Production 2012) et le Bessie Award à New York (Outstanding Production 2014). Auparavant, la Compagnie avait reçu, entre autres, The South Bank Sky Arts Award en 2011 pour Gnosis, le Helpmann Award à Sydney pour la meilleure chorégraphie et le meilleur danseur en 2007 avec Zero Degrees, ainsi que six UK Critics’ Circle National Dance Awards dont celui de Best Male Dancer en 2012.
                        <br/> Akram Khan est artiste associé à Sadler’s Wells, Londres et Curve, Leicester. Les précédentes productions incluent Kaash, TOROBAKA, iTMOi (in the mind of igor), DESH, Vertical, Road, Gnosis.
                        <br/> Source : Théâtre de la Ville</p>
                    
                    <h2 className="poiretTitre">Chorégraphies</h2>
                    <p className="bordure">2000 : Loose in Flight — Fix — Rush<br/>
                        2001 : Polaroid Feet (kathak) — Related Rocks<br/>
                        2002 : Kaash, décors d'Anish Kapoor, musiques Nitin Sawhney<br/>
                        2002 : If Not, Why Not ?<br/>
                        2003 : Ronin (kathak)<br/>
                        2004 : Ma<br/>
                        2005 : Zero Degrees, en collaboration avec Sidi Larbi Cherkaoui, musiques Nitin Sawhney<br/>
                        2006 : Sacred Monsters avec Sylvie Guillem<br/>
                        2006 : Variations for Vibes, Strings & Pianos (Tribute to Steve Reich), sur Variations for Vibes, Pianos, and Strings commandé au compositeur<br/>
                        2008 : Bahok (anciennement Bridge)<br/>
                        2008 : IN-I avec Juliette Binoche, décor d'Anish Kapoor<br/>
                        2009 : Confluences<br/>
                        2010 : Gnosis<br/>
                        2011 : Vertical Road, musiques Nitin Sawhney<br/>
                        2011 : Desh (kathak)<br/>
                        2013 : iTMOi (In the Mind of Igor), musique Nitin Sawhney, Jocelyn Pook et Ben Frost<br/>
                        2013 : Desert Dancer<br/>
                        2014 : Dust pour l'English National Ballet<br/>
                        2014 : The Rashomon Effect<br/>
                        2014 : Torobaka, duo avec Israel Galván – une version solo en est dérivée intitulée Toro (2016)<br/>
                        2015 : The Pursuit of Now, improvisations sur la musique du pianiste Shahin Novrasli<br/>
                        2015 : Technê un solo pour la tournée d'adieu de Sylvie Guillem<br/>
                        2015 : Chotto Desh, version pour enfants de Desh<br/>
                        2016 : Big Dance et Kadamati, danses collectives<br/>
                        2016 : Until the Lions d'après le livre de Karthika Naïr<br/>
                        2018 : Portraits in Otherness<br/>
                        2018 : Xenos solo de et avec Akram Khan<br/>
                        2019 : Outwitting the Devil</p>
                </div>
            </Styles>
		);
	}
}

export default KhanTextes;


const Styles = styled.div`
    .poiretTitre {
        font-family: 'Poiret One', cursive;
        color: #E4E3E2;
        font-size: 2em;
        text-transform: uppercase;
        margin-top: 2em;
    }
    .bordure {
        border: #E4E3E2 solid 1px;
        font-family: 'Poiret One', cursive;
        color: #E4E3E2;
        font-size: 1em;
        letter-spacing: 0;
        padding: 2em;
    }
`;