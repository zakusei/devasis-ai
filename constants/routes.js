import {
  TiCodeOutline,
  TiFlowSwitch,
  TiMessage,
  TiHomeOutline,
} from "react-icons/ti";
import { VscSettings } from "react-icons/vsc";

export const ROUTES = [
  {
    href: "/home",
    icon: <TiHomeOutline style={{ height: 20, width: 20 }} />,
    title: "Home",
  },
  {
    href: "/tasks",
    icon: <TiCodeOutline style={{ height: 20, width: 20 }} />,
    title: "Tasks",
  },
  {
    href: "/roadmap",
    icon: <TiFlowSwitch style={{ height: 20, width: 20 }} />,
    title: "Roadmap",
  },
  {
    href: "/chat",
    icon: <TiMessage style={{ height: 20, width: 20 }} />,
    title: "Chat",
  },
  {
    href: "/settings",
    icon: <VscSettings style={{ height: 20, width: 20 }} />,
    title: "Settings",
  },
];
