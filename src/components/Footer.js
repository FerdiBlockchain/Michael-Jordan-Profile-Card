import react from "react";
import instagramLogo from "../images/instagram-icon.png";
import facebookLogo from "../images/facebook-icon.png";
import twitterLogo from "../images/twitter-icon.png";

export default function Footer() {
  return (
    <div className="footer--container">
      <div className="footer--items">
        <img src={instagramLogo} alt="" className="footer--image" />
        <img src={facebookLogo} alt="" className="footer--image" />
        <img src={twitterLogo} alt="" className="footer--image" />
      </div>
    </div>
  );
}
