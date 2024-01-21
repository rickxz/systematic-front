import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NovaRevisao from "./pages/NovaRevisao/novaRevisao";
import Protocol from "./pages/Protocolo/Protocol";
import ProtocolPartTwo from "./pages/Protocolo/Protocol-Part-Two";
import ProtocolPartThree from "./pages/Protocolo/Protocol-Part-Three";
import Identification from "./pages/Execution/Identification";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newRevision" element={<NovaRevisao />} />

          {/*Nested Routes*/}
          <Route path="/newRevision/protocol" element={<Protocol />} />
          <Route path="/newRevision/protocolpartTwo" element={<ProtocolPartTwo />} />
          <Route path="/newRevision/protocolpartThree" element={<ProtocolPartThree />} />
          <Route path="/newRevision/identification" element={<Identification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
