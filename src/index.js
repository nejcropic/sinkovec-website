import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Logo from "./images/logo_transparent.png";
import LogoBlue from "./images/logo_transparent_blue.png";
import Okolica from "./icons/plain.png";
import Rusenje from "./icons/building.png";
import Drobljenje from "./icons/crushing.png";
import Dostava from "./icons/delivery-truck.png";
import Izkopi from "./icons/excavator.png";
import Dvorisce from "./icons/backyard.png";
import Skarpa from "./icons/stones.png";
import Traktor from "./icons/tractors.png";
import Zid from "./icons/wall.png";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [
      Logo,
      LogoBlue,
      Okolica,
      Rusenje,
      Drobljenje,
      Dostava,
      Izkopi,
      Dvorisce,
      Skarpa,
      Traktor,
      Zid,
    ];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export {
  Logo,
  LogoBlue,
  Okolica,
  Rusenje,
  Drobljenje,
  Dostava,
  Izkopi,
  Dvorisce,
  Skarpa,
  Traktor,
  Zid,
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <PreloadImages />
    <App />
  </BrowserRouter>
);
