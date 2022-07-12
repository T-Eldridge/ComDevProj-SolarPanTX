import React from "react";
import './footer.css';
import Logo from "../images/BBB-Logo.jpg"
import YT from "../images/yt-thumb.jpg";
import FB from "../images/facebook.jpg";
import IG from "../images/2048px-Instagram_icon.png";
import Twitter from "../images/Twitter-logo.svg.png";   


const Footer = () => <div className="Footer">
    <a href="https://www.bbb.org/"><img src={Logo} alt="BBB" /></a>
    <a href="https://www.youtube.com/channel/UCs6__DhtjJ_olrruo9flyLQ"><img  src={YT} alt="YT"/></a>
    <a href="https://www.facebook.com/profile.php?id=100078358163935"><img  src={FB} alt="FB"/></a>
    <a href="https://www.instagram.com/sptxservices/"><img  src={IG} alt="IG"/></a>
    <a href="https://twitter.com/Sptxservices"><img src={Twitter} alt="Twitter"/></a>
</div>


export default Footer