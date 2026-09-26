const datos = {
  persona: {
    nombre: "Ana Paula Franco",
    titulo:
      "Estudiante de la Tecnicatura Universitaria en Programación de la UTN-FRT",
    resumen:
      "Me apasiona el desarrollo de software y la resolución de problemas. Mi mayor interés está en el Backend y el diseño de Bases de Datos, y disfruto del trabajo en equipo para transformar ideas en soluciones reales.",
  },

  enlaces: ["Inicio", "Sobre mí", "Tecnologías", "Proyectos", "Contacto"],

  sobreMi:
    "Soy estudiante de la Tecnicatura Universitaria en Programación en la UTN y me interesa la resolución de problemas lógicos. Tengo bases sólidas en desarrollo Full Stack, pero lo que más me gusta es construir sistemas eficientes, estructurados y escalables, tanto en el código como en la lógica de los datos.",

  tecnologias: [
    "C#",
    "MySQL",
    "SQLite",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Visual Studio",
  ],

  proyectos: [
    {
      id: 1,
      titulo: "Sistema de Soporte y Tickets",
      estado: "Finalizado",
      descripcion:
        "Aplicación web cliente-servidor para crear, seguir y gestionar tickets de soporte.",
      tecnologias: ["HTML", "CSS", "JavaScript", "JSON Server"],
      rol: "Desarrollo colaborativo en equipo",
      detalle:
        "Proyecto integrador de Programación III. Colaboré en el diseño de la interfaz y programé la lógica asíncrona en JavaScript para consumir una API REST simulada con JSON Server, sin recargar la página.",
      repositorio: "https://stocksystemutn.netlify.app/",
    },

    {
      id: 2,
      titulo: "Sistema de Gestión de Transporte",
      estado: "En desarrollo",
      descripcion:
        "Aplicación para digitalizar la documentación y la facturación de una flota de vehículos.",
      tecnologias: ["C#", "MySQL"],
      rol: "Diseño de la base de datos y desarrollo",
      detalle:
        "Pensado para una empresa de transporte privado: reemplaza planillas y papeles por una base de datos relacional.",
      repositorio: null,
    },
  ],
  contactos: [
    {
      nombre: "GitHub",
      enlace: "https://github.com/paulyff",
    },

    {
      nombre: "Email",
      enlace: "mailto:pauli.franco998@gmail.com",
    },
  ],
};

export default datos;
