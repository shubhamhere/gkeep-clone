import React from "react";
import Logo from "./images/Logo.png";
 
const Header = () => {
    return (
        <>
            <div className="d-inline-flex p-2  shadow-lg bg-warning w-100">
                <img className="rounded mx-2 " src={Logo} height="45px" width="45px" alt="Error 404" />
                <h4 className="pt-1 text-light  font-weight-bold tshadow">Subham Keep </h4>
               
            </div>
 
        </>
    )
}
export default Header;
