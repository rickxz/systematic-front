import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Identification from "./pages/Execution/Identification";
import Extraction from "./pages/Execution/SubPages/Extraction/Extraction";
import Insertion from "./pages/Execution/SubPages/Insertion/Insertion";
import TestPage from "./pages/TestPage/TestPage";
import AppContext, { AppProvider } from "./components/Context/AppContext";
import { useContext } from "react";
import ProtocolPartThree from "./pages/Protocolo/ProtocolPartThree";
import KeyWordScreen from "./pages/Execution/SubPages/KeyWordScreen/KeyWordScreen";
import Selection from "./pages/Execution/SubPages/Selection/Selection";
import LandingPage from "./pages/LandingPage/LandingPage";
import Finalization from "./pages/NovaRevisao/finalization/Finalization";
import Graphics from "./pages/NovaRevisao/graphics/Graphics";
import NovaRevisao from "./pages/NovaRevisao/novaRevisao";
import Protocol from "./pages/Protocolo/Protocol";
import ProtocolPartTwo from "./pages/Protocolo/Protocol-Part-Two";
import SearchSession from "./pages/SearchSession/SearchSession";
import UserArea from "./pages/UserArea/UserArea";
import Homepage from "./pages/Homepage/Homepage";
import CollaboratorsPage from "./pages/CollaboratorsPage/CollaboratorsPage";
import Visualization from "./pages/NovaRevisao/visualization/Visualization";
import Unauthorized from "./pages/UnauthorizedPage/UnauthorizedPage";
import ServerError from "./pages/ServerErrorPage/ServerErrorPage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import IdentificationSession from "./pages/Execution/IdentificationSession";

function App() {
  const context = useContext(AppContext);

  if (!context) {
    return (
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/newRevision" element={<ProtectedRoute element={<NovaRevisao />} />} />
            <Route path="/landing" element={<ProtectedRoute element={<LandingPage />} />} />
            <Route path="/test" element={<ProtectedRoute element={<TestPage />} />} />
            <Route path="/user" element={<ProtectedRoute element={<UserArea />} />} />
            <Route path="/collaborators" element={<ProtectedRoute element={<CollaboratorsPage />} />} />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="/serverError" element={<ServerError />} />

            {/*Nested Routes*/}
            <Route path="/newRevision/protocol/:id" element={<ProtectedRoute element={<Protocol />} />} />
            <Route path="/newRevision/protocolpartTwo/:id" element={<ProtectedRoute element={<ProtocolPartTwo />} />} />
            <Route path="/newRevision/protocolpartThree/:id" element={<ProtectedRoute element={<ProtocolPartThree />} />} />
            <Route path="/newRevision/identification" element={<ProtectedRoute element={<Identification />} />} />
            <Route path="/newRevision/identification/:session" element={<IdentificationSession/>} />
            <Route path="/newRevision/keywords" element={<ProtectedRoute element={<KeyWordScreen />} />} />
            <Route path="/newRevision/selection" element={<ProtectedRoute element={<Selection />} />} />
            <Route path="/newRevision/extraction" element={<ProtectedRoute element={<Extraction />} />} />
            <Route path="/newRevision/insertion" element={<ProtectedRoute element={<Insertion />} />} />
            <Route path="/newRevision/graphics" element={<ProtectedRoute element={<Graphics />} />} />
            <Route path="/newRevision/finalization" element={<ProtectedRoute element={<Finalization />} />} />
            <Route path="/newRevision/visualization" element={<ProtectedRoute element={<Visualization />} />} />
            <Route path="/newRevision/searchSession" element={<ProtectedRoute element={<SearchSession />} />} />
          </Routes>
        </AppProvider>
      </Router>
    );
  }

  const  button  = context;
  console.log("App -> button: " + button);

  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<UserArea />} />
          <Route path="/newRevision" element={<ProtectedRoute element={<NovaRevisao />} />} />
          <Route path="/landing" element={<ProtectedRoute element={<LandingPage />} />} />
          <Route path="/test" element={<ProtectedRoute element={<TestPage />} />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/collaborators" element={<ProtectedRoute element={<CollaboratorsPage />} />} />
          <Route path="/user" element={<ProtectedRoute element={<UserArea />} />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/serverError" element={<ServerError />} />

          {/*Nested Routes*/}
          <Route path="/newRevision/protocol" element={<ProtectedRoute element={<Protocol />} />} />
          <Route path="/newRevision/protocolpartTwo" element={<ProtectedRoute element={<ProtocolPartTwo />} />} />
          <Route path="/newRevision/identification" element={<ProtectedRoute element={<Identification />} />} />
          <Route path="/newRevision/keywords" element={<ProtectedRoute element={<KeyWordScreen />} />} />
          <Route path="/newRevision/selection" element={<ProtectedRoute element={<Selection />} />} />
          <Route path="/newRevision/extraction" element={<ProtectedRoute element={<Extraction />} />} />
          <Route path="/newRevision/insertion" element={<ProtectedRoute element={<Insertion />} />} />
          <Route path="/newRevision/graphics" element={<ProtectedRoute element={<Graphics />} />} />
          <Route path="/newRevision/finalization" element={<ProtectedRoute element={<Finalization />} />} />
          <Route path="/newRevision/searchSession" element={<ProtectedRoute element={<SearchSession />} />} />
          {/* <Route path="/newRevision/protocolpartThree" element={<ProtocolPartThree />} /> */}
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
