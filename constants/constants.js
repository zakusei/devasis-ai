import { TiCodeOutline, TiFlowSwitch, TiMessage } from "react-icons/ti";

export const ROUTES = [
  {
    href: "/tasks",
    icon: <TiCodeOutline style={{ height: 24, width: 24 }} />,
  },
  {
    href: "/roadmap",
    icon: <TiFlowSwitch style={{ height: 24, width: 24 }} />,
  },
  { href: "/chat", icon: <TiMessage style={{ height: 24, width: 24 }} /> },
];
