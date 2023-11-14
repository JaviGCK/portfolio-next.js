import { RiHome3Line, RiAccountPinCircleLine, RiServerLine, RiBriefcase2Line, RiChatPollLine } from "react-icons/ri";
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
    name: "work",
    path: "/works",
    icon: <RiBriefcase2Line size="30" />,
  },
  {
    name: "services",
    path: "/services",
    icon: <RiServerLine size="30" />,
  },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <RiChatPollLine size="30" />,
  },
  {
    name: "languages",
    path: "",
    icon: <LiaLanguageSolid size="30" />,
  },
];
