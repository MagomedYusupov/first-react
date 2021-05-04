import React from 'react';
import Footext from "./Footext";
import Copyright from "./Copyright";

function Footer(props) {
    return (
        <div className="footer">
            <Footext/>
            <Copyright/>
        </div>
    )
};

export default Footer;