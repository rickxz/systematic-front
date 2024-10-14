import { Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";
import UserInfos from "./subcomponents/UserInfos";
import MenuButton from "./subcomponents/MenuButton";
import { LARGE_SIZE, SMALL_SIZE, conteiner, content } from "./styles/sidebarStyles";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import "./styles.css"
import { Navigation } from "./Navigation";
import { MenuToggle } from "./MenuToggle";


interface ISidebarProps {
  type: string;
  defaultOpen: number;
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};


export default function Sidebar({defaultOpen, type}: ISidebarProps): JSX.Element {

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const [navSize, setNavSize] = useState(LARGE_SIZE);

  const toggleNavSize = (): void => {
    setNavSize(navSize === SMALL_SIZE ? LARGE_SIZE : SMALL_SIZE);
  };

  return (
    <motion.div initial={false} animate="closed" variants={{closed: {
      transition: {
        delay: 2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },}} style={{width: isOpen ? "140px" : "350px" , transition: !isOpen ? "0s" : "1.5s"}}>
      <motion.nav
        initial={false}
        animate={!isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
        style={{ margin: "20px" }}
      >
        <motion.div 
          initial={false}
          className="background"
          variants={sidebar}
          style={{ borderRadius: "30px" }}
        />
        <Navigation defaultOpen={defaultOpen} type={type} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.div>
  );
}
