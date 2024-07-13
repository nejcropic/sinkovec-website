import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Galerija.css";

import {
  GalerijaItemsIzkopi,
  GalerijaItemsRusenje,
  GalerijaItemsUrejanje,
  GalerijaItemsPrevozi,
  GalerijaItemsSkarpe,
  GalerijaItemsAgro,
} from "./GalerijaItems";

function Galerija({ refs }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [activeGalerija, setActiveGalerija] = useState("izkopi");

  const handleOpenModal = (index, offset) => {
    setSlideNumber(index + offset);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(combinedItems.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const nextSlide = () => {
    slideNumber + 1 === combinedItems.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const renderGalerijaItems = (items, offset) => {
    return items.map((item, index) => (
      <motion.div
        className="single"
        key={index}
        onClick={() => handleOpenModal(index, offset)}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <img src={item.image} alt={item.title} />
      </motion.div>
    ));
  };

  const variants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const combinedItems = [
    ...GalerijaItemsIzkopi,
    ...GalerijaItemsRusenje,
    ...GalerijaItemsUrejanje,
    ...GalerijaItemsPrevozi,
    ...GalerijaItemsSkarpe,
    ...GalerijaItemsAgro,
  ];

  const offsets = {
    izkopi: 0,
    rusenje: GalerijaItemsIzkopi.length,
    urejanje: GalerijaItemsIzkopi.length + GalerijaItemsRusenje.length,
    prevozi:
      GalerijaItemsIzkopi.length +
      GalerijaItemsRusenje.length +
      GalerijaItemsUrejanje.length,
    skarpe:
      GalerijaItemsIzkopi.length +
      GalerijaItemsRusenje.length +
      GalerijaItemsUrejanje.length +
      GalerijaItemsPrevozi.length,
    agro:
      GalerijaItemsIzkopi.length +
      GalerijaItemsRusenje.length +
      GalerijaItemsUrejanje.length +
      GalerijaItemsPrevozi.length +
      GalerijaItemsSkarpe.length,
  };

  return (
    <>
      <div className="galerija-wrapper" ref={refs.galerijaRef}>
        <h1>Galerija</h1>
        {openModal && (
          <div className="slider-container" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <i
                className="fas fa-chevron-left btnPrev"
                onClick={prevSlide}
              ></i>
              <i
                className="fas fa-chevron-right btnNext"
                onClick={nextSlide}
              ></i>
              <i
                className="fas fa-times btnClose"
                onClick={handleCloseModal}
              ></i>
              <div className="fullScreenImage">
                <img
                  src={combinedItems[slideNumber].image}
                  alt={combinedItems[slideNumber].title}
                />
              </div>
            </div>
          </div>
        )}
        <div className="galerija-container">
          <div className="galerija-items">
            <button
              className={`button ${
                activeGalerija === "all" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("all")}
            >
              Pokaži vse
            </button>
            <button
              className={`button ${
                activeGalerija === "izkopi" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("izkopi")}
            >
              Izkopi
            </button>
            <button
              className={`button ${
                activeGalerija === "urejanje" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("urejanje")}
            >
              Urejanje okolice in dvorišč
            </button>
            <button
              className={`button ${
                activeGalerija === "rusenje" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("rusenje")}
            >
              Rušenje in drobljenje
            </button>
            <button
              className={`button ${
                activeGalerija === "prevozi" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("prevozi")}
            >
              Dostava in prevozi
            </button>
            <button
              className={`button ${
                activeGalerija === "skarpe" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("skarpe")}
            >
              Izdelava škarp in zidov
            </button>
            <button
              className={`button ${
                activeGalerija === "agro" ? "active" : "inactive"
              }`}
              onClick={() => setActiveGalerija("agro")}
            >
              Agromelioracije
            </button>
          </div>
          <div className="galerija-images-wrapper">
            <AnimatePresence wait>
              {activeGalerija === "izkopi" && (
                <motion.div
                  key="izkopi"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsIzkopi, offsets.izkopi)}
                </motion.div>
              )}
              {activeGalerija === "urejanje" && (
                <motion.div
                  key="urejanje"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsUrejanje, offsets.urejanje)}
                </motion.div>
              )}
              {activeGalerija === "rusenje" && (
                <motion.div
                  key="rusenje"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsRusenje, offsets.rusenje)}
                </motion.div>
              )}
              {activeGalerija === "prevozi" && (
                <motion.div
                  key="prevozi"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsPrevozi, offsets.prevozi)}
                </motion.div>
              )}
              {activeGalerija === "skarpe" && (
                <motion.div
                  key="skarpe"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsSkarpe, offsets.skarpe)}
                </motion.div>
              )}
              {activeGalerija === "agro" && (
                <motion.div
                  key="agro"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {renderGalerijaItems(GalerijaItemsAgro, offsets.agro)}
                </motion.div>
              )}
              {activeGalerija === "all" && (
                <motion.div
                  key="all"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={variants}
                  transition={{ duration: 0.5 }}
                  className="galerija-images"
                >
                  {combinedItems.map((item, index) => (
                    <motion.div
                      className="single"
                      key={index}
                      onClick={() => handleOpenModal(index, 0)}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={variants}
                      transition={{ duration: 0.5 }}
                    >
                      <img src={item.image} alt={item.title} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}

export default Galerija;
