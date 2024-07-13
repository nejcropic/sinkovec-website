import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  /* hideNavItemsVarian, */
  mobileMenuVariant,
  fadeInVariant,
  ulVariant,
  liVariant,
  hideNavItemsVariant,
} from "../animations.jsx";
import { NavMenuItems } from "./NavMenuItems.jsx";
import { Logo } from "../../index.js";
const NavBar = ({ refs }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const scrollToRef = (refName) => {
    const ref = refs[refName];
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
      setMobileNavOpen(false);
    }
  };

  return (
    <main className="container">
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        {/* <div className="logo-container">
          <motion.h1 variants={hideNavItemsVariant}></motion.h1>
          <img src={Logo} alt="Logo" />
        </div> */}
        <div className="menu-container">
          {/* <Link>Storitve</Link>
          <Link>Storitve</Link>
          <Link>Storitve</Link> */}
          <motion.div
            variants={hideNavItemsVariant}
            onClick={() => setMobileNavOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </motion.div>
        </div>
        <motion.div variants={mobileMenuVariant} className="mobile-menu">
          <motion.button
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <i className="fas fa-times"></i>
          </motion.button>
          <motion.ul variants={ulVariant}>
            {NavMenuItems.map((navItem) => (
              <motion.li whileTap={{ scale: 0.95 }} key={navItem.id}>
                <motion.div
                  onClick={() => scrollToRef(navItem.ref)}
                  variants={liVariant}
                >
                  {navItem.title}
                </motion.div>
              </motion.li>
            ))}
            <motion.li whileTap={{ scale: 0.95 }}>
              <motion.div
                onClick={() => scrollToRef("galerijaRef")}
                variants={liVariant}
              >
                Galerija
              </motion.div>
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.nav>
    </main>
  );
};

export default NavBar;
