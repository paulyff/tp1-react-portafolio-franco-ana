import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Proyects from "../components/Proyects";
import datosIniciales from "../data/datos";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const [datos] = useState(datosIniciales);

  return (
    <>
      <Header nombre="Mi Portafolio" enlaces={datos.enlaces} />

      <Hero
        nombre={datos.persona.nombre}
        titulo={datos.persona.titulo}
        resumen={datos.persona.resumen}
      />

      <About texto={datos.sobreMi} />

      <Skills tecnologias={datos.tecnologias} />

      <Proyects proyectos={datos.proyectos} />

      <Contact contactos={datos.contactos} />
      <Footer />
    </>
  );
};

export default Home;
