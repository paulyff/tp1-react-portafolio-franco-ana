const Contact = ({ contactos }) => {
  return (
    <div className="seccion" id="Contacto">
      <h2>Contacto</h2>

      <p>Si querés contactarme, podés encontrarme en los siguientes medios:</p>

      <ul>
        {contactos.map((contacto) => (
          <li key={contacto.nombre}>
            <a href={contacto.enlace} target="_blank" rel="noreferrer">
              {contacto.nombre}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
