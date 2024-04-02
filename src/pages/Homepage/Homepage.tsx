import { Box, Flex } from "@chakra-ui/react";
import Header from "./subcomponents/Header/Header";
import Footer from "./subcomponents/Footer/Footer";
import Article from "./subcomponents/Article/Article";
//import CollaboratorsCarrocel from "./subcomponents/CollaboratorsCarrocel";

export default function Homepage() {
  return (
    <Box height={"80vh"}>
      <Header />

      <Flex bg="gray.200" direction={"column"} pt="80px">
        {/* <CollaboratorsCarrocel/> */}

        <Article
          header={"Sobre a ferramenta"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={"../../../public/photos/homepagePhotos/examploPhoto02.png"}
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
          src={"../../../public/photos/homepagePhotos/examploPhoto01.png"}
          alt={"foto de exemplo"}
          imgPosition={"right"}
          style="dark"
          id={"tutoriais"}
        />

        <Article
          header={"Colaboradores"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={"../../../public/photos/homepagePhotos/examploPhoto02.png"}
          alt={"foto de exemplo"}
          imgPosition={"left"}
          style="light"
          id={"colaboradores"}
        />

        <Article
          header={"Contato"}
          bodyText={`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque
              commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt
              vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla.`}
          src={"../../../public/photos/homepagePhotos/examploPhoto01.png"}
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
          src={"../../../public/photos/homepagePhotos/examploPhoto02.png"}
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
