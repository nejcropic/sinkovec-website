import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./NavBar.css";
import {
  mobileMenuVariant,
  fadeInVariant,
  ulVariant,
  liVariant,
  hideNavItemsVariant,
} from "../animations.jsx";
import { NavMenuItems } from "./NavMenuItems.jsx";

const NavBar = ({ refs }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={`container ${scrollDirection === "down" ? "hidden" : ""}`}>
      <motion.nav
        initial="closed"
        animate={mobileNavOpen ? "opened" : "closed"}
      >
        <div className="menu-container">
          <motion.div
            variants={hideNavItemsVariant}
            className="menu-icon"
            onClick={() => setMobileNavOpen(true)}
          >
            <i className="fas fa-bars"></i>
          </motion.div>
          <ul className="desktop-menu">
            {NavMenuItems.map((navItem) => (
              <li key={navItem.id} onClick={() => scrollToRef(navItem.ref)}>
                {navItem.title}
              </li>
            ))}
            <li onClick={() => scrollToRef("galerijaRef")}>Galerija</li>
          </ul>
        </div>
        {mobileNavOpen && (
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
        )}
      </motion.nav>
    </main>
  );
};

export default NavBar;
