import { useEffect, useState } from "react";                                       // On importe les hooks useEffect et useState de la bibliothèque react. 
import { useLocation } from "react-router-dom";                                    // On importe le hook useLocation de la bibliothèque react-router-dom. useLocation permet de récupérer l'objet location qui contient des informations sur l'URL actuelle. Cela permet de récupérer les paramètres de l'URL. 

export function useApartment() {                                                   // On crée une fonction useApartment qui permet de récupérer les données de l'appartement sur lequel on a cliqué.
  const [flat, setFlat] = useState(null);                                          
  const location = useLocation();                                                  
  console.log("location",location);                                                          
  console.log("our apartment id is:", location.state.apartmentId );                                               
  
  useEffect(() => {                                                                
    const abortController = new AbortController();                                 // AbortController() permet de créer un contrôleur capable d'annuler une requête. 
    fetch("db.json", { signal: abortController.signal })                           // On récupère les données de la base de données se trouvant dans le fichier db.json. "fetch()" permet de récupérer des données depuis une URL. 
      .then((res) => res.json())                                                  
      .then((flats) => {                                                           
        const flat = flats.find((flat) => flat.id === location.state.apartmentId );
        setFlat(flat);                                                             // Grace à setflat on met à jour l'état flat avec les données de l'appartement récupéré.
        console.log("flat",flat); 
    })
      .catch(console.error);
    return () => {
      abortController.abort();
    };
  }, []);
  return flat;                                           
                                                        
}

