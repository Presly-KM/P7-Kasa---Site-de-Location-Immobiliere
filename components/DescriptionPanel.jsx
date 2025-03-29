import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {                                                    // On crée un composant fonctionnel "DescriptionPanel" qui va afficher un panel contenant un titre et un contenu. 
  const [isContentVisible, setIsContentVisible] = useState(true);                            // On utilise le hook useState pour gérer l'état de la visibilité du contenu. Par défaut, le contenu est visible (true). On crée une variable "isContentVisible" qui contient un état (true ou false) et une fonction "setIsContentVisible" qui permet de changer cet état. On utilise la fonction "useState" pour initialiser l'état de la visibilité du contenu à "true". 

  const showContent = () => {
    setIsContentVisible(!isContentVisible);                                                  // La fonction showContent contient la fonction "setIsContentVisible" destiné à changer l'état de la visibilité du contenu par "(!isContentVisible)" qui permet d'inverser l'état actuel de la visibilité du contenu. Si le contenu est visible, il devient caché et inversement.
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content";  // On crée une variable "contentClass" qui contient une classe CSS qui varie en fonction de l'état de la visibilité du contenu. Ici, le code signifie : Si le contenu est visible, la classe est "visible". Sinon, la classe est "hidden(caché)". On ajoute la classe "description__content" pour styliser le contenu. 
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";    // On crée une variable "chevronClass" qui contient une classe CSS qui varie en fonction de l'état de la visibilité du contenu. Ici, le code signifie : Si le contenu est visible, la classe est "fa-chevron-up". Sinon, la classe est "fa-chevron-down". On ajoute la classe "fas" pour styliser la flèche.
  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>                              {/* On ajoute un événement "onClick" sur le titre pour appeler la fonction "showContent" lorsqu'on clique dessus. Lorsqu'on clique sur le titre, la fonction "showContent" est appelée et inverse l'état de la visibilité du contenu. */}
        <span>{props.title}</span>                                                           {/* On affiche le titre du contenu. */}
        <i className={chevronClass}></i>                                                     {/* On active la constante "chevronClass". Cette constante affiche une flèche qui change de direction en fonction de l'état de la visibilité du contenu. (cf ci-dessus ligne 11). RAPPEL : <i> est une balise HTML qui permet d'insérer des icônes. */}
      </p>
      <p className={contentClass}>{props.content}</p>                                        {/* On active la constante "contentClass" (qui a été crée à la l.10) pour afficher ou cacher le contenu en fonction de l'état de la visibilité du contenu.  */}
    </div>
  );
}