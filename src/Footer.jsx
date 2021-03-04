import React from "react";
 
var year = new Date().getFullYear();
 
const Footer = () => {
    return (
        <>
            <div className=" text-center   fixed-bottom">
                <p className=" font-weight-bold text-white tshadow">© Subham Keep {year}</p>
            </div>
        </>
    )
}
export default Footer;
