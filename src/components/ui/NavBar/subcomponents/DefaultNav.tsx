import NavItem from "./NavItem";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { GiArchiveRegister } from "react-icons/gi";

interface IDefaultNavigation {
  navSize: string;
}

const routes = [
  { path: "/register", icon: GiArchiveRegister, title: "Register" },
  { path: "/", icon: FaHome, title: "Home Page" },
  { path: "/newRevision", icon: SiAddthis, title: "New Revision" },
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
