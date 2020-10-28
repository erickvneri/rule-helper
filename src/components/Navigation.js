import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to='/rule-builder'>Rule Builder </Link>
      <Link to='/rule-templates'>Rule Templates </Link>
    </div>
  );
};

export default Navigation;
