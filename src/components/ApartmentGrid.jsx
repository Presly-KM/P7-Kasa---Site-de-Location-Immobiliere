import React, { useEffect, useState } from "react";           
import "./ApartmentGrid.scss";                              
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "./../hooks/useApartments.jsx";

function ApartmentGrid() {                                   // On crée un composant "ApartmentGrid" qui affiche les appartements sous forme de grille. 
  const apartments = useApartments();                        // On récupère les appartements en appelant la fonction useApartments() (située dans le hook useApartments.jsx). On stocke les appartements dans la variable "apartments".
  return (
    <div className="grid">
      {apartments.map((apartment) => (                       // apartments.map() permet de parcourir le tableau d'appartements (récupéré dans useApartments.jsx)...
        <ApartmentCard                                       // ...et de retourner les données d'un apartement pour les transmettre à ApartmentCard afin qu'au final la carte d'un appartement puisse s'afficher avec les bonnes données.
          title={apartment.title}                            // On récupère le titre de l'appartement et on le passe en tant que propriété "title" au composant ApartmentCard pour le pouvoir le récupérer ensuite en utilisant "props" + "props.title" (cf. ApartmentCard.jsx)
          imageUrl={apartment.cover}                         // Pareil que ci-dessus mais pour l'image de l'appartement.
          id={apartment.id}                                  // Pareil que ci-dessus mais pour l'id de l'appartement.
          key={apartment.id}                    
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;


