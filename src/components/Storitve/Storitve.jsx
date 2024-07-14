import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Storitve.css";

import { storitve } from "./StoritveData";

function StoritveItem({ icon, title, image }) {
  const [shouldFlip, setShouldFlip] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;

      const { top, bottom } = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate middle of viewport
      const viewportMiddle = viewportHeight / 2;

      // Calculate middle of the card
      const cardMiddle = (top + bottom) / 2;

      // Determine if the card is near the middle of the viewport
      const isNearMiddle =
        Math.abs(cardMiddle - viewportMiddle) < viewportHeight * 0.2; // Adjust threshold as needed

      // Update shouldFlip state
      setShouldFlip(isNearMiddle);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={cardRef} className="storitve-item">
      <motion.div
        className="storitve-content"
        animate={{ rotateY: shouldFlip ? 180 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="card-front">
          <img src={icon} alt={title} />
          <h2>{title}</h2>
        </div>
        <div className="card-back">
          <img src={image} alt={title} />
          <h2>{title}</h2>
        </div>
      </motion.div>
    </div>
  );
}

function Storitve({ refs }) {
  return (
    <div className="storitve-wrapper" ref={refs.storitveRef}>
      <h1>Storitve</h1>
      <div className="storitve-container">
        {storitve.map((service, index) => (
          <StoritveItem
            key={index}
            icon={service.icon}
            title={service.title}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Storitve;
