import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Protocol from "./pages/Protocolo/Protocol";
import NovaRevisao from "./pages/NovaRevisao/novaRevisao";
import Identification from "./pages/Execution/Identification";
import SearchSession from "./pages/SearchSession/SearchSession";
import ProtocolPartTwo from "./pages/Protocolo/Protocol-Part-Two";
import ProtocolPartThree from "./pages/Protocolo/Protocol-Part-Three";
import Selection from "./pages/Execution/SubPages/Selection/Selection";
import Insertion from "./pages/Execution/SubPages/Insertion/Insertion";
import Finalization from "./pages/NovaRevisao/finalization/Finalization";
import Extraction from "./pages/Execution/SubPages/Extraction/Extraction";
import KeyWordScreen from "./pages/Execution/SubPages/KeyWordScreen/KeyWordScreen";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newRevision" element={<NovaRevisao />} />
          <Route path="/landing" element={<LandingPage />} />

          {/*Nested Routes*/}
          <Route path="/newRevision/protocol" element={<Protocol />} />
          <Route path="/newRevision/protocolpartTwo" element={<ProtocolPartTwo />} />
          <Route path="/newRevision/protocolpartThree" element={<ProtocolPartThree />} />
          <Route path="/newRevision/identification" element={<Identification />} />
          <Route path="/newRevision/keywords" element={<KeyWordScreen />} />
          <Route path="/newRevision/selection" element={<Selection />} />
          <Route path="/newRevision/extraction" element={<Extraction />} />
          <Route path="/newRevision/insertion" element={<Insertion />} />
          <Route path="/newRevision/finalization" element={<Finalization />} />
          <Route path="/newRevision/searchSession" element={<SearchSession />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
