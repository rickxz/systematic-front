import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
interface IDefaultNavigation {
  navSize: string;
}

export default function DefaultNavigation({ navSize }: IDefaultNavigation) {
  return (
    <>
      <Link to={"/"}>
        <NavItem navSize={navSize} icon={FaHome} title="Página Principal" />
      </Link>
      <Link to={"/novaRevisao"}>
        <NavItem navSize={navSize} icon={SiAddthis} title="Nova Revisão" />
      </Link>
      <NavItem navSize={navSize} icon={FaHome} title="Outra Página" />
    </>
  );
}
