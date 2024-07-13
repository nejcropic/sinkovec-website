import React from "react";
import "./Kontakt.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Logo } from "../../index";

function Kontakt({ refs }) {
  return (
    <>
      <div className="kontakt-wrapper" ref={refs.kontaktRef}>
        <div className="kontakt-container">
          <h1>O podjetju</h1>
          <h3>Zemeljska dela z gradbeno mehanizacijo, jože šinkovec s.p.</h3>
          <p>Zagradec 7</p>
          <p>1303 Zagradec, Slovenija</p>

          <div className="kontakt-flex">
            <h3>Davčna številka: </h3>
            <p>52535118</p>
          </div>

          <div className="kontakt-flex">
            <h3>Območje delovanja:</h3>
            <div className="kontakt-flex-div">
              <p>- Dolenjska</p>
              <p>- Osrednja Slovenija</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Kontakt;
