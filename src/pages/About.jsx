import React from 'react';
import { DescriptionPanel } from '../components/DescriptionPanel';
import { ImageBanner } from '../components/ImageBanner';
import "./About.scss";

function About() {                                                                                // On crée un composant "About" qui concerne la page dédiée aux informations ("A propos") sur l'entreprise.
    return (
        <>
            <ImageBanner />                                                                       {/* Le composant ImageBanner est utilisé pour afficher une image en haut de la page "A propos". Il est importé depuis le dossier components. */} 
            <div className="about__container">
                <DescriptionPanel title="Fiabilité" content="C'est très important" />             {/* Selon la maquettte, la partie "A propos" contient 4 panels. Chaque panel contient un titre et un contenu. */}
                <DescriptionPanel title="Respect" content="C'est très important" />
                <DescriptionPanel title="Service" content="C'est très important" />
                <DescriptionPanel title="Responsabilité" content="C'est très important" />
            </div>
        </>
    );
}

export default About;