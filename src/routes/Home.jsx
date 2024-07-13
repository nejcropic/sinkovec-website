import React, { useRef } from "react";
import "../components/Home/Home.css";
import { ScrollProvider } from "../components/ScrollContext";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import Storitve from "../components/Storitve/Storitve";
import Footer from "../components/Footer/Footer";
import Ponudba from "../components/Ponudba/Ponudba";
import Kontakt from "../components/Kontakt/Kontakt";
/* ";

import ScrollToTopButton from "../components/ScrollToTopButton/ScrollToTopButton";
*/
import Galerija from "../components/Galerija/Galerija";
import Projekti from "../components/Projekti/Projekti";

function Home() {
  const ponudbaRef = useRef(null);
  const projektiRef = useRef(null);
  const storitveRef = useRef(null);
  const podatkiRef = useRef(null);
  const povprasevanjeRef = useRef(null);
  const kontaktRef = useRef(null);
  const galerijaRef = useRef(null);

  return (
    <ScrollProvider>
      <NavBar
        refs={{
          ponudbaRef,
          storitveRef,
          podatkiRef,
          projektiRef,
          kontaktRef,
          galerijaRef,
        }}
      />
      <Hero />
      {/* <Ponudba
        refs={{
          ponudbaRef,
        }}
      /> */}
      <Projekti
        refs={{
          projektiRef,
        }}
      />
      <Storitve
        refs={{
          storitveRef,
        }}
      />
      <Kontakt
        refs={{
          kontaktRef,
        }}
      />
      <Galerija
        refs={{
          galerijaRef,
        }}
      />
      <Footer />
    </ScrollProvider>
  );
}

export default Home;
