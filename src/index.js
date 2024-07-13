import React, { useEffect } from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import Logo from "./images/logo_transparent.png";
import LogoBlue from "./images/logo_transparent_blue.png";

const PreloadImages = () => {
  useEffect(() => {
    const imagesToPreload = [Logo, LogoBlue];

    imagesToPreload.forEach((imageSrc) => (new Image().src = imageSrc));
  }, []);
};

export { Logo, LogoBlue };

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter>
      <PreloadImages />
      <App />
    </HashRouter>
  </React.StrictMode>
);
