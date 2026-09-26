import Projects from "../components/Projects";

const Home = () => {
  const [datos, setDatos] = useState(datosIniciales);

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
    </>
  );
};

export default Home;
