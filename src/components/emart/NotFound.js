import React from "react";
import "./Stylesheet/NotFound.css";

function NotFound(props) {
  return (
    <div className="not-found">
      <p>
        Sorry!
        <br />
        You entered a wrong URL!
      </p>
    </div>
  );
}

export default NotFound;
