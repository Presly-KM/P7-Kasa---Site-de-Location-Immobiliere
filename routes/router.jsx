import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";  // On importe "createBrowserRouter" et "Outlet" de "react-router-dom". "createBrowserRouter" permet de créer un router et "Outlet" permet de dire à React Router où afficher le composant que l'on souhaite imbriquer dans un ensemble.
import HomePage from "../pages/HomePage";
import Footer from "../layout/Footer";                           
import Main from "../layout/Main";
import Navbar from "../components/Navbar";
import ApartmentPage from "../pages/ApartmentPage";
import About from "../pages/About";
import { ErrorPageNotFound } from "../pages/ErrorPageNotFound";


const HeaderFooterLayout = () => {    // On crée une mise en page par défaut qui sera le même pour chaque composant.  
  return (                           
    <>
      <Navbar />
      <Main>                         
        <Outlet />                    
      </Main>
      <Footer />
    </>
  );
};


export const router = createBrowserRouter([        // On crée un router avec "createBrowserRouter" et on lui passe un tableau d'objets. Chaque objet représente une route. Chaque route a une propriété "path" qui est le chemin de la route et une propriété "element" qui est le composant à afficher pour ce chemin.
  {
    element: <HeaderFooterLayout />,              
    children: [                                    
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/flat",
        element: <ApartmentPage />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);