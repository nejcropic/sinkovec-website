import React from "react";
import "./Ponudba.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Logo } from "../../index";

function Ponudba({ refs }) {
  return (
    <>
      <div className="ponudba-wrapper" ref={refs.ponudbaRef}>
        <h1>Ponudba</h1>
        <div className="ponudba-container">
          <div className="ponudba-item">
            <i className={`fa-solid fa-map`}></i>
            <h3>Območje Delovanja</h3>
            <p>- Dolenjska</p>
            <p>- Osrednja Slovenija</p>
          </div>
          <div className="ponudba-item">
            <i className={`fa-solid fa-phone`}></i>
            <h3>Povpraševanje</h3>
            <div className="item-flex">
              <Link to="tel:+38631223082">
                <button>031-223-082</button>
              </Link>
              {/* <Link to="mailto:joze.sinkovec@hotmail.com">
                <button className="mail">joze.sinkovec@hotmail.com</button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ponudba;
