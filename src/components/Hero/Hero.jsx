import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Logo } from "../../index";
import BackgroundSlider from "../BackgroundSlider/BackgroundSlider";
import { storitve } from "../Storitve/StoritveData";
function Hero() {
  //const getData = () => (window.innerWidth <= 1000 ? VideoPhone : VideoKomp);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <>
      <div className="hero-container">
        {/* <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.5 }}
          className="upper-wrapper"
        >
          <img src={Logo} alt="" />
        </motion.div> */}

        <BackgroundSlider sliderData={storitve} sliderDataPhone={storitve} />

        <div className="overlay">
          <div className="slider-main">
            <p>
              zemeljska dela z gradbeno mehanizacijo <br />
              jože šinkovec s.p.
            </p>
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
