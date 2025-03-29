import React from "react";
import { NavLink } from "react-router-dom";         // <NavLink>: est un composant fourni par React Router qui permet de créer des liens entre les différentes pages d'une application React
import "./Navbar.scss";
                                                  
function Navbar() {                                 // La fonction Navbar va afficher la barre de navigation de l'application.
    return (                                    
        <nav className="navbar">                       
            <NavLink to="/">                        
                <div className="navbar__logo">
                    <img src="logoP7Kasaredimentionné.png" alt="Logo" />
                </div>
            </NavLink>
            <NavLink to="/">                     
                <div>Acceuil</div>
            </NavLink>
            <NavLink to="/about">                 
                <div>A Propos</div>
            </NavLink>
        </nav>
    );
}

export default Navbar;

