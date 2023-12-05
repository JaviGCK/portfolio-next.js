import { SiTailwindcss, SiGithub, SiReact, SiNextdotjs, SiTestinglibrary, SiMongodb, SiCss3, SiPostgresql, SiNodedotjs, SiExpress, SiPhonepe, SiTypescript, SiBootstrap, SiPostman, SiJavascript } from "react-icons/si";
import { FaDesktop, FaMobileAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
export const cardContent = [
  {
    id: 0,
    title: "ApolloFy",
    version: <FaMobileAlt size={30} />,
    description:
      "Bienvenido a Apollofy, un proyecto fullstack que fusiona la sofisticación de Spotify con la versatilidad de SoundCloud, ofreciendo un reproductor de música personalizado. Desarrollado con MERN Stack (MongoDB, Express, React y Node.js), Apollofy va más allá al permitir a los usuarios no solo disfrutar de la música, sino también gestionar su propia biblioteca, subir canciones, seguir a otros usuarios, crear álbumes personalizados y mucho más. Explora Apollofy y descubre una nueva forma de experimentar la música en línea.",
    imageUrl: "/ApolloFy.png",
    skills: [
      {
        icon: <SiReact size={40} />,
        name: "React",
      },
      {
        icon: <SiCss3 size={40} />,
        name: "CSS",
      },
      {
        icon: <SiNodedotjs size={40} />,
        name: "Node.js",
      },
      {
        icon: <SiPostgresql size={40} />,
        name: "Postgresql",
      },
      {
        icon: <SiMongodb size={40} />,
        name: "MongoDB",
      },
    ],
    link: "https://apollofy-frontend.vercel.app/",
  },
  {
    id: 1,
    title: "MoviesHub",
    version: <FaDesktop size={30} />,
    description:
      "Bienvenido a MoviesHub! Un emocionante proyecto fullstack creado con Next.js, CSS, MongoDB, Node.js y Express. En MoviesHub, tú tomas el control de tu propia experiencia cinematográfica. Sube, modifica y elimina tus películas favoritas con facilidad. Personaliza cada entrada con descripciones detalladas, puntuaciones e imágenes llamativas.",
    imageUrl: "/MOviesHub-next.png",
    skills: [
      {
        icon: <SiNextdotjs size={40} />,
        name: "Next.js",
      },
      {
        icon: <SiCss3 size={40} />,
        name: "CSS",
      },
      {
        icon: <SiNodedotjs size={40} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress size={40} />,
        name: "Express",
      },
      {
        icon: <SiMongodb size={40} />,
        name: "MongoDB",
      },
    ],
    link: "https://movies-hub-next-iy56.vercel.app/",
  },
  {
    id: 2,
    title: "MoviesHub",
    version: <FaMobileAlt size={30} />,
    description:
      "Bienvenido a MoviesHub! Un emocionante proyecto fullstack creado con MERN Stack (MongoDB, Express, React y Node.js). En MoviesHub, tú tomas el control de tu propia experiencia cinematográfica. Sube, modifica y elimina tus películas favoritas con facilidad. Personaliza cada entrada con descripciones detalladas, puntuaciones e imágenes llamativas.",
    imageUrl: "/MoviesHub.png",
    skills: [
      {
        icon: <SiReact size={40} />,
        name: "Next.js",
      },
      {
        icon: <SiCss3 size={40} />,
        name: "CSS",
      },
      {
        icon: <SiNodedotjs size={40} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress size={40} />,
        name: "Express",
      },
      {
        icon: <SiMongodb size={40} />,
        name: "MongoDB",
      },
    ],
    link: "https://client-movies-hub.vercel.app/",
  },
  {
    id: 3,
    title: "Rick&Morty",
    version: <DiResponsive size={30} />,
    description:
      "Bienvenido a Rick y Morty Explorer, un proyecto emocionante desarrollado con TypeScript, npm y Bootstrap. Esta aplicación te sumerge en el fascinante universo de la serie animada Rick & Morty, permitiéndote explorar detalles fascinantes sobre cada episodio y personaje.",
    imageUrl: "/r&m.png",
    skills: [
      {
        icon: <SiTypescript size={40} />,
        name: "Typescript",
      },
      {
        icon: <SiBootstrap size={40} />,
        name: "Bootstrap",
      },
      {
        icon: <SiNodedotjs size={40} />,
        name: "Node.js",
      },
    ],
    link: "https://rick-morty-api-sooty.vercel.app/",
  },
  {
    id: 4,
    title: "Server",
    version: "",
    description:
      "Mi servidor, desarrollado con Node.js y Express, junto con MongoDB como base de datos, es la columna vertebral que impulsa la funcionalidad de mis proyectos, en particular, MoviesHub. Este robusto servidor actúa como el núcleo de servicios de base de datos, brindando un sólido soporte para almacenar y recuperar información esencial. Desde detalles de películas hasta información sobre usuarios, este servidor garantiza una gestión eficiente de datos para garantizar un rendimiento óptimo y una experiencia de usuario sin interrupciones en MoviesHub y otros proyectos relacionados. ¡Explora el mundo de las películas con la confianza de que la infraestructura detrás de escena está diseñada para ofrecer un servicio fiable y escalable!",
    imageUrl: "/server.png",
    skills: [
      {
        icon: <SiNodedotjs size={40} />,
        name: "Node.js",
      },
      {
        icon: <SiExpress size={40} />,
        name: "Express",
      },
      {
        icon: <SiMongodb size={40} />,
        name: "MongoDB",
      },
      {
        icon: <SiPostman size={40} />,
        name: "Postman",
      },
    ],
    link: "https://github.com/JaviGCK/server_Movies",
  },
  {
    id: 5,
    title: "Calculator",
    version: <FaDesktop size={30} />,
    description:
      "Sumérgete en la experiencia única de mi proyecto de calculadora, donde la funcionalidad se encuentra en la intersección de la simplicidad y la elegancia. Desarrollada exclusivamente con JavaScript y CSS, esta calculadora no solo realiza operaciones matemáticas de manera precisa, sino que también presenta un atractivo diseño con la capacidad de cambiar entre modos claro y oscuro a través de un práctico toggle.Cada función y operación matemática se ejecutan sin la utilización de la función eval(), proporcionando una mayor seguridad y control sobre las operaciones realizadas.",
    imageUrl: "/calculadora.png",
    skills: [
      {
        icon: <SiJavascript size={40} />,
        name: "Javascript",
      },
      {
        icon: <SiCss3 size={40} />,
        name: "CSS",
      },
    ],
    link: "https://calculator-assembler.vercel.app/",
  },
]
