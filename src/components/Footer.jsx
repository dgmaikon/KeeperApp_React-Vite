import React from "react";

const currentYear = new Date();
let year = currentYear.getFullYear();

const Footer = () => {
    return(
        <footer>
            <p>Copyright { year }</p>
        </footer>
    );
}

export default Footer;