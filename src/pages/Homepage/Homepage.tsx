import { Box, Flex } from "@chakra-ui/react";
import Header from "./subcomponents/Header/Header";
import Footer from "./subcomponents/Footer/Footer";
import Article from "./subcomponents/Article/Article";
import CollaboratorsCarousel from "./subcomponents/CollaboratorsCaroulse/collaboratorsCarousel";
import HeroSection from "./subcomponents/HeroSection/HeroSection";
import img2 from "/photos/homepagePhotos/examploPhoto02.png";
import img1 from "/photos/homepagePhotos/examploPhoto01.png";
import exemple from "/photos/homepagePhotos/examploPhoto01.png";
import "../../index.css";

export default function Homepage() {
  return (
    <Box height={"100vh"} overflow={"auto"}>
      <Header show={true} />

      <Flex bg="gray.200" direction={"column"} pt="80px">
        <HeroSection />

        <Article
          header={"Sobre a ferramenta"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={exemple}
          alt={"foto de exemplo"}
          imgPosition={"left"}
          style="light"
          id={"sobre"}
        />

        <Article
          header={"Comece a usar a StArt"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={img2}
          alt={"foto de exemplo"}
          imgPosition={"right"}
          style="dark"
          id={"tutoriais"}
        />

        <CollaboratorsCarousel />

        <Article
          header={"Contato"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={img1}
          alt={"foto de exemplo"}
          imgPosition={"right"}
          style="dark"
          id={"contato"}
        />

        <Article
          header={"Comunidade"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={img2}
          alt={"foto de exemplo"}
          imgPosition={"left"}
          style="light"
          id={"comuinidade"}
        />
      </Flex>

      <Footer />
    </Box>
  );
}
