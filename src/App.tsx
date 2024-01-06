import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import NovaRevisao from "./pages/NovaRevisao/novaRevisao";
import Protocol from "./pages/Protocolo/Protocol";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novaRevisao" element={<NovaRevisao />} />

          {/*Nested Routes*/}
          <Route path="/novaRevisao/protocol" element={<Protocol />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
