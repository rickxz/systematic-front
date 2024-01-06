import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

interface IDefaultNavigation {
  navSize: string;
}

const routes = [
  { path: "/", icon: FaHome, title: "Página Principal" },
  { path: "/novaRevisao", icon: SiAddthis, title: "Nova Revisão" },
];

export default function DefaultNavigation({ navSize }: IDefaultNavigation) {
  return (
    <>
      {routes.map((route, index) => (
        <Link key={index} to={route.path}>
          <NavItem navSize={navSize} icon={route.icon} title={route.title} />
        </Link>
      ))}
    </>
  );
}
