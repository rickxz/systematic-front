import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import Article from "./subcomponents/Article";

export default function Homepage() {
  return (
    <Box height={"80vh"}>
        <Header />

        <Flex bg="gray.200" direction={"column"}>
            <Article header={"Sobre a ferramenta"} 
              bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
              " Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque"+
              " commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt"+
              " vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla."+
              "\n\n Integer a nunc quis diam sollicitudin interdum sed eget leo. Cras mollis magna"+
              " vitae gravida ornare. Pellentesque convallis egestas est, non tincidunt lectus"+
              " cursus vel. Aenean consequat lorem eros, in egestas orci iaculis at. Nulla eget"}
               src={"../../../public/photos/homepagePhotos/examploPhoto02.png"} alt={"foto de exemplo"}
               imgPosition={"left"} style="light"/>


               <Article header={"Comece a usar a StArt"} 
              bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
              " Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque"+
              " commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt"+
              " vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla."+
              "\n\n Integer a nunc quis diam sollicitudin interdum sed eget leo. Cras mollis magna"+
              " vitae gravida ornare. Pellentesque convallis egestas est, non tincidunt lectus"+
              " cursus vel. Aenean consequat lorem eros, in egestas orci iaculis at. Nulla eget"}
               src={"../../../public/photos/homepagePhotos/examploPhoto01.png"} alt={"foto de exemplo"}
               imgPosition={"right"} style="dark"/>


              <Article header={"Colaboradores"} 
              bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
              " Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque"+
              " commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt"+
              " vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla."+
              "\n\n Integer a nunc quis diam sollicitudin interdum sed eget leo. Cras mollis magna"+
              " vitae gravida ornare. Pellentesque convallis egestas est, non tincidunt lectus"+
              " cursus vel. Aenean consequat lorem eros, in egestas orci iaculis at. Nulla eget"}
               src={"../../../public/photos/homepagePhotos/examploPhoto02.png"} alt={"foto de exemplo"}
               imgPosition={"left"} style="light"/>


               <Article header={"Contato"} 
              bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
              " Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque"+
              " commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt"+
              " vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla."+
              "\n\n Integer a nunc quis diam sollicitudin interdum sed eget leo. Cras mollis magna"+
              " vitae gravida ornare. Pellentesque convallis egestas est, non tincidunt lectus"+
              " cursus vel. Aenean consequat lorem eros, in egestas orci iaculis at. Nulla eget"}
               src={"../../../public/photos/homepagePhotos/examploPhoto01.png"} alt={"foto de exemplo"}
               imgPosition={"right"} style="dark"/>


              <Article header={"Comunidade"} 
              bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."+
              " Morbi purus sem, porta a tellus eleifend, vehicula egestas quam. Quisque"+
              " commodo ipsum at tortor semper, at vulputate velit fringilla. Nam tincidunt"+
              " vestibulum lectus. Mauris lacinia ipsum pulvinar dui pellentesque fringilla."+
              "\n\n Integer a nunc quis diam sollicitudin interdum sed eget leo. Cras mollis magna"+
              " vitae gravida ornare. Pellentesque convallis egestas est, non tincidunt lectus"+
              " cursus vel. Aenean consequat lorem eros, in egestas orci iaculis at. Nulla eget"}
               src={"../../../public/photos/homepagePhotos/examploPhoto02.png"} alt={"foto de exemplo"}
               imgPosition={"left"} style="light"/>

        </Flex>

        <Footer />
    </Box>
  );
}


