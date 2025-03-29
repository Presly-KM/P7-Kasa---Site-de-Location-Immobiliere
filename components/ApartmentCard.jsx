import React from "react";
import "./ApartmentCard.scss";                                             // On importe l'esthétique (css) des cartes d'appartements
import { Link } from "react-router-dom";                                   // On importe "Link" de "react-router-dom" pour pouvoir rediriger l'utilisateur vers "/flat" lorsqu'il clique sur une carte d'appartement.

function ApartmentCard(props) {                                            // La fonction "ApartmentCard" met en place la carte d'appartement. 
  return (
    <Link                                                                  // On utilise Link pour que lorsqu' on clique sur une carte d'appartement on soit redirigé vers "/flat" 
      to="/flat"
      state={{                                                             // On utilise "state" afin de passer des données (en l'occurence l'id de l'appartement ciblé) à la page "/flat".
        apartmentId : props.id                
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" />                               {/* On affiche l'image de l'appartement */}
        <div className="apartment__subtitle">{props.title}</div>          {/* On affiche le titre de l'appartement */}
      </div>
    </Link>
  );
}
export default ApartmentCard; 