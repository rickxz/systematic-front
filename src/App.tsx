import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NovaRevisao from "./pages/NovaRevisao/novaRevisao";
import Protocol from "./pages/Protocolo/Protocol";
import ProtocolPartTwo from "./pages/Protocolo/Protocol-Part-Two";
import ProtocolPartThree from "./pages/Protocolo/Protocol-Part-Three";
import Identification from "./pages/Execution/Identification";
import KeyWordScreen from "./pages/KeyWordScreen/KeyWordScreen";
import Selection from "./pages/Execution/SubPages/Selection/Selection";
import Extraction from "./pages/Execution/SubPages/Extraction/Extraction";
import Insertion from "./pages/Execution/SubPages/Insertion/Insertion";
import TestPage from "./pages/TestPage/TestPage";
import SidebarContext, { SidebarProvider } from "./components/Context/sidebarContext";
import { useContext } from "react";

function App() {
  const context = useContext(SidebarContext);

  if (!context) {
    // Se o contexto não estiver definido, retorne algo apropriado
    return (
        <>
          <Router>
            <SidebarProvider>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/newRevision" element={<NovaRevisao />} />
                  <Route path="/test" element={<TestPage />} />
    
    
                  {/*Nested Routes*/}
                  <Route path="/newRevision/protocol" element={<Protocol />} />
                  <Route path="/newRevision/protocolpartTwo" element={<ProtocolPartTwo />} />
                  <Route path="/newRevision/protocolpartThree" element={<ProtocolPartThree />} />
                  <Route path="/newRevision/identification" element={<Identification />} />
                  <Route path="/newRevision/keywords" element={<KeyWordScreen />} />
                  <Route path="/newRevision/selection" element={<Selection />} />
                  <Route path="/newRevision/extraction" element={<Extraction />} />
                  <Route path="/newRevision/insertion" element={<Insertion />} />
                </Routes>
              </SidebarProvider>
          </Router>
        </>
      );
  }

  const {button} = context;
  console.log('App -> button: ' + button);
  
  return (
    <>
      <Router>
        <SidebarProvider>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newRevision" element={<NovaRevisao />} />
              <Route path="/test" element={<TestPage />} />


              {/*Nested Routes*/}
              <Route path="/newRevision/protocol" element={<Protocol />} />
              <Route path="/newRevision/protocolpartTwo" element={<ProtocolPartTwo />} />
              <Route path="/newRevision/protocolpartThree" element={<ProtocolPartThree />} />
              <Route path="/newRevision/identification" element={<Identification />} />
              <Route path="/newRevision/keywords" element={<KeyWordScreen />} />
              <Route path="/newRevision/selection" element={<Selection />} />
              <Route path="/newRevision/extraction" element={<Extraction />} />
              <Route path="/newRevision/insertion" element={<Insertion />} />
            </Routes>
          </SidebarProvider>
      </Router>
    </>
  );
}

export default App;
