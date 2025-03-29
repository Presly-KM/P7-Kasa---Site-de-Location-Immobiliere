import React from "react";
import "./HomePage.scss";
import Banner from "../layout/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";

function HomePage() {             // Le Homepage est la page d'acceuil 
  return (
    <>
      <Banner />                  {/* On importe le composant Banner qui est un composant fonctionnel qui va afficher la bannière de la page d'accueil. */}
      <ApartmentGrid />           {/* On importe le composant ApartmentGrid qui est un composant fonctionnel qui va afficher les appartements sous forme de grille. */}
    </>
  );
}

export default HomePage;     