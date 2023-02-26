import react from "react";
import profileLogo from "../images/MJ-Profile-Pic.jpg";

export default function Header() {
  return (
    <div className="header--container">
      <img src={profileLogo} alt="" width="317px" height="250px" />
    </div>
  );
}
