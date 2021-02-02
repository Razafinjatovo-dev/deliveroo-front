import React from "react";
import "./Topheader.css";

import Logo from "../../Assets/Deliveroo-logo.png";

const Topheader = () => {
  return (
    <div className="Topheader">
      <div className="TopheaderInside">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Topheader;
