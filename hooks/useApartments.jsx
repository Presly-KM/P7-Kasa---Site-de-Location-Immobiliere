import { useState, useEffect } from "react";              
                                                          
export const useApartments = () => {                      // La constante useApartments affiche sur la page d'acceuil les appartements selon leur nombre disponible dans le fichier db.json !
  const [apartments, setApartments] = useState([]);       
 
  useEffect(() => {                                      
    const abortController = new AbortController();        
    fetch("db.json", { signal: abortController.signal })  
      .then((res) => res.json())                         
      .then((res) => setApartments(res))                  
      .catch(console.error);
                                                         
    return () => {                                        
      console.log("cleanup");
      abortController.abort();                           
    };
  }, []);                                                
  return apartments;                                     
};

