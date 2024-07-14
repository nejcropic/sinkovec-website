import React from "react";
import "./Projekti.css";
import { Link } from "react-router-dom";

import MapIcon from "../../icons/map.png";
import PhoneIcon from "../../icons/smartphone.png";

function Projekti({ refs }) {
  return (
    <>
      <div className="projekti-wrapper" ref={refs.ponudbaRef}>
        <h1>Ponudba</h1>
        <div className="projekti-container">
          <div className="projekti-cards">
            <div className="projekti-item">
              <img src={MapIcon} alt="map" />
              <h3>Osrednja Slovenija</h3>
              <p>Območje Delovanja</p>
            </div>
            <div className="projekti-item">
              <img src={MapIcon} alt="map" />
              <h3>Dolenjska</h3>
              <p>Območje Delovanja</p>
            </div>
            <div className="projekti-item">
              <img src={PhoneIcon} alt="phone" />
              <h3>Povpraševanje</h3>
              <div className="projekti-flex">
                <Link to="tel:+38631223082">
                  <button>031-223-082</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="projekti-contact">
            <h2>Kontaktiraj nas</h2>
            <p>Izpolni obrazec in pošlji povpraševanje</p>
            <form action="./Projekti.php" method="post">
              <div className="form-container">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Vaše ime in priimek*"
                />
                <input type="email" name="email" id="" placeholder="Email*" />
                <select name="job" id="">
                  <option value="0">Vrsta storitve*</option>
                  <option value="1">Izkopi</option>
                  <option value="2">Rušenje objektov</option>
                  <option value="3">Agromelioracije</option>
                  <option value="4">Urejanje okolice</option>
                  <option value="5">Urejanje dvorišč</option>
                  <option value="6">
                    Drobljenje materiala z drobilno žlico.
                  </option>
                  <option value="7">Kiper in traktorski prevozi</option>
                  <option value="8">Dostava materiala</option>
                  <option value="9">Izdelava kamnitih škarp/izložb</option>
                  <option value="10">Valjanje</option>
                  <option value="11">Izdelava podpornih zidov (škarp)</option>
                  <option value="12"></option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  id=""
                  placeholder="Telefonska številka*"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Opiši naročilo..."
                ></textarea>
                <input type="submit" value="Send" className="submit-button" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projekti;
