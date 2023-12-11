import { RiHome3Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine, RiLinkedinBoxLine, RiGithubLine } from "react-icons/ri";
import { LiaLanguageSolid } from 'react-icons/lia'

export const dataNavbar = [
  {
    name: "home",
    path: "/",
    icon: <RiHome3Line size="30" />,
  },
  {
    name: "about",
    path: "/about",
    icon: <RiAccountPinCircleLine size="30" />,
  },
  {
    name: "works",
    path: "/works",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <RiChatPollLine size="30" />,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/javier-garc%C3%ADa-cabello-b97367267/",
    icon: <RiLinkedinBoxLine size="30" />,
  },
  {
    name: "GitHub",
    path: "https://github.com/JaviGCK",
    icon: <RiGithubLine size="30" />,
  },
];
