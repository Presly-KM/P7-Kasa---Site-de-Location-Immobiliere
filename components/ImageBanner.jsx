import React, { useState } from "react";                                        // On importe le hook useState depuis la bibliothèque React. 
import "./ImageBanner.scss";

export function ImageBanner(props) {                                            // On crée un composant ImageBanner qui va afficher un carousel d'images. 
  const pictures = props.pictures;                                              // On récupère les images présents dans la base de donnée "flat.pictures" située dans ApartmentPage.jsx. 

  const [currentPicture, setCurrentPicture] = useState(0);                      // Ici on utilise le hook useState pour gérer l'état de l'image actuelle affichée dans le carousel. On initialise l'état à 0, c'est-à-dire la première image du tableau d'images (array). Mais la valeur évolue en fonction des clics de l'utilisateur. "setcurrentPicture" est une fonction qui permet de changer l'état de l'image actuelle affichée dans le carousel.

  const getClassName = (i) => {                                                 // On crée une fonction "getClassName" qui prend en paramètre un index "i" qui est un nombre. 
    if (i === currentPicture) return "show";                                    // Si l'index "i" est égal à l'image actuelle affichée dans le carousel (ici 0 au départ), la fonction retourne "show". Or "show" est une classe CSS qui permet d'afficher l'image en fixant l'opacité à 1.  
    return "";                                                                  // Sinon, la fonction retourne une chaîne de caractères vide. Or si la fonction retourne une chaîne de caractères vide, cela signifie que l'image est considéré comme n'étant pas affichée (en réalité elle est, mais son opacité est réglée à 0 par défaut pour la rendre invisible à l'écran).
  };

  const moveToNext = () => {                                                    // On crée une fonction "moveToNext" qui permet de passer à l'image suivante dans le carousel. le usestate(0) devient 1 , puis 2, puis 3 etc au fur et a mesure des clics 
    setCurrentPicture((currentPicture + 1) % pictures.length);                  // On utilise la fonction "setCurrentPicture" pour changer l'image actuelle affichée dans le carousel. On utilise l'opérateur modulo "%" pour revenir à la première image du carousel lorsque l'on arrive à la dernière image. En effet pictures.length est là pour empêcher d'aller au delà d'une certaine valeur. 
  };

  const moveToPrevious = () => {                                                // On crée une fonction "moveToPrevious" qui permet de passer à l'image précédente dans le carousel.
    const newCurrentPicture = currentPicture - 1;                               // On crée une variable "newCurrentPicture" qui contient l'index de l'image précédente dans le carousel. En effet currentPicture - 1 permet de passer à l'image précédente (par rapport a l'image actuelle) dans le carousel. Cette ligne de code s'appliquera au clique sur le bouton "précédent".
    if (newCurrentPicture < 0) {                                                // Si le nouveau CurrentPicture est inférieur à 0 ... Donc si on est à la première image du carousel (index 0) et qu'on clique sur le bouton "précédent" ...
      setCurrentPicture(pictures.length - 1);                                   // ... alors on revient à la dernière image du carousel (index 4). En effet, on utilise la fonction "setCurrentPicture" pour changer l'image actuelle affichée dans le carousel. On utilise "pictures.length - 1" (la dernière image de notre array) pour revenir à la dernière image du carousel lorsque l'on arrive à la première image. 
      return;
    }
    setCurrentPicture(currentPicture - 1);                                      // Sinon on retourne juste a l'image précèdente, c'est à dire celle, affichée avant le clic sur le bouton suivant 
  };

  const arePicturesAvailable = () => {                                          // On crée une fonction "arePicturesAvailable" qui permet de vérifier si des images sont disponibles dans le carousel.
    return pictures && pictures.length > 0;                                     // Si des images sont disponibles dans le carousel (array d'images) et que le nombre d'images est supérieur à 0, la fonction retourne "true". Sinon, la fonction retourne "false". 
  };

  const getCarouselOrDefaultImage = () => {                                     // On crée une fonction "getCarouselOrDefaultImage" qui permet d'afficher les images du carousel ou une image par défaut si aucune image n'est pas disponible.
    if (!arePicturesAvailable()) {                                              // Si aucune image n'est disponible dans le carousel, la fonction retourne une image par défaut. En effet, si la fonction "arePicturesAvailable" retourne "false" (pas d'images dans le carousel), on retourne une image par défaut.
      return <img src="https://picsum.photos/800" className="show" alt="" />;   // On retourne une image par défaut avec une source "https://picsum.photos/800" (image aléatoire de 800x800 pixels) et une classe "show" pour afficher l'image par défaut. 
    }
    return pictures.map((pic, i) => (                                           // Si les images sont bel et bien disponibles, on retourne les images du carousel. On utilise la fonction "map" pour parcourir le tableau d'images (array) et retourner une image pour chaque image.
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img>        // Pour chaque images (pictures) de la base de données on affiche une image (pic) avec une clé unique (key). Ensuite on intègre la classe CSS "show" par l'appel de la fonction getClassName(i) destinée à afficher l'image concernée.
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>    {/* Pour afficher les images carousel, on appelle la fonction getCarouselOrDefaultImage(). On utilise la fonction "getCarouselOrDefaultImage" pour afficher les images du carousel ou une image par défaut. */}
      {arePicturesAvailable() && (                                             //  On ajoute une condition : Si des images sont disponibles dans le carousel, on affiche les boutons "précédent" et "suivant" ainsi que le compteur de slide. Sinon, on n'affiche rien. {&&} est un opérateur logique qui permet de vérifier si une condition est vraie.  
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>       {/* On ajoute un événement "onClick" sur le bouton "précédent" pour appeler la fonction "moveToPrevious" lorsqu'on clique dessus. Lorsqu'on clique sur le bouton "précédent", la fonction "moveToPrevious" est appelée et permet de passer à l'image précédente dans le carousel. */}
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">                                     {/* cf la partie css pour le slide counter */}
            {currentPicture + 1} / {pictures.length}                           {/* On affiche le numéro de l'image actuelle affichée dans le carousel (currentPicture + 1) et le nombre total d'images dans le carousel (pictures.length). */}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>               {/* On ajoute un événement "onClick" sur le bouton "suivant" pour appeler la fonction "moveToNext" lorsqu'on clique dessus. Lorsqu'on clique sur le bouton "suivant", la fonction "moveToNext" est appelée et permet de passer à l'image suivante dans le carousel. */}
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}