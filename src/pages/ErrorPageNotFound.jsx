import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Main from "../layout/Main";
import "./ErrorPageNotFound.scss";
export function ErrorPageNotFound() {                             // La fonction ErrorPageNotFound affiche un message d'erreur 404 si l'utilisateur tente d'accéder à une page qui n'existe pas
  return (
    <>
      <Navbar />                                                  {/* On ajoute la barre de navigation dans la page d'erreur 404*/}
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oops! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>     {/* On ajoute un lien pour retourner à la page d'accueil */}
        </div>
      </Main>
    </>
  );
}