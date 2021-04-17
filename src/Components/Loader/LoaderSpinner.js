import Loader from "react-loader-spinner";
import "./loader.css";

import React from "react";

const LoaderSpinner = () => {
  return (
    <div className="loader">
      <Loader type="ThreeDots" color="#29CCBC" height={100} width={100} />
      <p>En cours de chargement...</p>
    </div>
  );
};

export default LoaderSpinner;
