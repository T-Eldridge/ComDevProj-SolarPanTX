import React from "react";
import './footer.css';
import Logo from "../images/BBB-Logo.jpg"
import YT from "../images/yt-thumb.jpg";
import FB from "../images/facebook.jpg";
import IG from "../images/2048px-Instagram_icon.png";


const Footer = () => <div className="Footer">
    <a href="https://www.bbb.org/"><img src={Logo} alt="BBB" /></a>
    <a href="https://www.youtube.com/"><img  src={YT} alt="YT"/></a>
    <a href="https://www.facebook.com/"><img  src={FB} alt="FB"/></a>
    <a href="https://www.instagram.com/?hl=en"><img  src={IG} alt="IG"/></a>
</div>


export default Footer