import React, { Component } from "react";
import styled from 'styled-components';

class CarlsonTextes extends Component {	 
	render() {
		return (
            <Styles>
                <div>
                <p className="bordure">Héritière des conceptions du mouvement, de la composition et de la pédagogie d’Alwin Nikolais, elle est arrivée en France en 1971. Elle a signé l’année suivante, avec Rituel pour un rêve mort, un manifeste poétique qui définit une approche de son travail qu’elle n’a pas démenti depuis : une danse assurément tournée vers la philosophie et la spiritualité. Au terme « chorégraphie », Carolyn Carlson préfère celui de « poésie visuelle » pour désigner son travail. Donner naissance à des œuvres témoins de sa pensée poétique, et à une forme d’art complet au sein de laquelle le mouvement occupe une place privilégiée.
            Depuis quatre décennies, son influence et son succès sont considérables dans de nombreux pays européens. Elle a joué un rôle clef dans l’éclosion des danses contemporaines françaises et italiennes avec le GRTOP à l’Opéra de Paris et le Teatrodanza à La Fenice. Elle a créé plus d’une centaine de pièces, dont un grand nombre constituent des pages majeures de l’histoire de la danse, de Density 21,5 à The Year of the horse, de Blue Lady à Steppe, de Maa à Signes, de Writings on water à Inanna. En 2006, son œuvre a été couronnée par le premier Lion d’Or jamais attribué à un chorégraphe par la Biennale de Venise. Elle est aussi commandeur des Arts et Lettres, et officier de la Légion d’honneur.
            Fondatrice de l’Atelier de Paris-Carolyn Carlson à La Cartoucherie en 1999, elle a été, avec la Carolyn Carlson Company, artiste associée au Théâtre National de Chaillot de 2014 à 2016. En 2017, en parallèle du cœur d’activité de la compagnie axé sur la diffusion, de nouvelles formes de créations voient le jour : une exposition pour les musées, un long-métrage dansé pour le cinéma...
            </p>
                </div>
            </Styles>
		);
	}
}

export default CarlsonTextes;


const Styles = styled.div`
    .bordure {
        font-family: 'Poiret One', cursive;
        color: #121212;
        font-size: 1.1em;
        padding: 3em;
        border: #E4E3E2 solid 1px;
    }
`;