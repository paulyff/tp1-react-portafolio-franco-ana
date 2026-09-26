import fotoPerfil from "../assets/img-portafolio.jpg";

const Hero = ({ nombre, titulo, resumen }) => {
  return (
    <div className="hero" id="Inicio">
      <img src={fotoPerfil} alt={`Foto de ${nombre}`} />

      <h1>¡Hola! Soy {nombre}</h1>

      <p>{titulo}</p>

      <p>{resumen}</p>
    </div>
  );
};

export default Hero;
