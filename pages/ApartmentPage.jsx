import React, { useEffect, useState } from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";                         

function ApartmentPage() {                                                         // On crée un composant "ApartmentPage" qui affiche dans une autre page les informations d'un appartement après qu'on ait cliqué sur un appartement parmi la grille présente dans la page d'accueil.
  const flat = useApartment();                                                     // On récupère les données de l'appartement sur lequel on a cliqué en appellant la fonction useApartment() (située dans le hook useApartment.jsx). 

  if (flat == null) return <div>Loading...</div>;                                  // Si les données de l'appartement ne sont pas encore chargées, on affiche "Loading...".
  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} />                                     
      <ApartmentHeader flat={flat} />                                             
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} />        
        <DescriptionPanel
          title="Equipements"                                                             
          content={flat.equipments.map((eq, i) => (                               
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;