const Header = ({ nombre, enlaces }) => {
  return (
    <header className="header">
      <h2>{nombre}</h2>

      <ul>
        {enlaces.map((enlace) => (
          <li key={enlace}>
            <a href={"#" + enlace}>{enlace}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
