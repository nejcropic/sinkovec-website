import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Logo } from "../../index";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-maintext">
            <img src={Logo} alt="" />
            <p>
              Zemeljska dela z gradbeno mehanizacijo <br />
              jože šinkovec s.p.
            </p>
          </div>

          <div className="social-media">
            <p>Spremljajte socialna omrežja</p>
            <div className="social-media-div">
              <Link to="https://www.facebook.com/profile.php?id=100066861664020">
                <button>
                  <i class="fa-brands fa-facebook"></i>
                </button>
              </Link>
              <Link to="https://www.instagram.com/jozesinkovecc/">
                <button>
                  <i class="fa-brands fa-instagram"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-copyrights">
          <p>
            @2024 Jože Šinkovec s.p. <br className="hidebr" />
            Izdelal Nejc Ropič. Vse pravice pridržane
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
