import React from "react";
import "./Main.scss";

function Main({children}) {                          // Cette fonction va mettre le children (Banner et ApartmentGrid) dans une classe "main". C'est un wrapper. Le children va bénéficier de certaines propriétés notamment le padding et le margin de la classe "main".
    return <div className="main">{children}</div>;   
}

export default Main;
