import React from "react";
import "./ApartmentHeader.scss";     
                                                                          
export function ApartmentHeader({ flat }) {                               // La fonction ApartmentHeader vient afficher l'entête de la description des appartements (localisation de l'appartment, identité de l'hote, avis sous formes d'étoiles) 
  const { name } = flat.host;                                             // On récupère le nom de l'hôte de l'appartement. (On a fait ici et ci-dessous du destructuring)
  const [firstName, lastName] = name.split(" ");                          // On sépare le nom de l'hôte en prénom et nom de famille. On met le prénom dans la variable "firstName" et le nom de famille dans la variable "lastName".

  return (
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{flat.title}</h1>                                             {/* On récupère le titre de l'appartement pour l'afficher */}
        <h2>{flat.location}</h2>                                          {/* On récupère la localisation de l'appartement pour l'afficher */}
        <div className="apartment__tags">
          {flat.tags.map((tag) => (                                       // On parcourt le tableau de tags et on affiche chaque tag. 
            <span key={tag}>{tag}</span>                                   
          ))}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>                                      {/* Après avoir récupéré le prénom de l'hote (ligne 5 et 6), on affiche le prénom de l'hôte. */}
            <span>{lastName}</span>                                       {/* Après avoir récupéré le nom de famille de l'hote (ligne 5 et 6), on affiche le nom de famille de l'hôte. */}
          </h3>
          <div className="apartment__owner__badge">
            <img src={flat.host.picture} alt="" />                        {/* On affiche la photo de l'hôte. */} 
          </div>
        </div>
        <div className="apartment__owner__stars">                          
          {[1, 2, 3, 4, 5].map((num) => (                                 // On fait une array de longueur 5. Pour chacun de ces numéros contenu dans l'array est fabriqué une span avec une étoile (sachant que par défaut elle sera grise) mais si le rating est supérieur ou égale à l'un de ces numéros on associe une classe "on" à l'étoile.
            <span key={num} className={flat.rating >= num ? "on" : ""}>   {/* Ici les numéros dans l'array sont uniques alors on décide de les identifier par une clé*/}
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}