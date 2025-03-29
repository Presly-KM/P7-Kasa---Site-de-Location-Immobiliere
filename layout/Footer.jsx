import React from "react";
import "./Footer.scss"
function Footer() {                                                          // Le composant Footer est un composant fonctionnel qui va afficher le pied de page du site.
    return (
        <div className="footer">
            <div>
                <img src="Kasa-black-logo.png" alt="logo" width="100"/>
            </div>
            <div>© 2020 Kasa. All rights reserved.</div>
        </div>
    );
}

export default Footer;