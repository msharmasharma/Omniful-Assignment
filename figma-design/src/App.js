import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import { Saleschannel } from "./pages/Saleschannel";
import { Hubs } from "./pages/Hubs";
import { Home } from "./components/Home";
function App() {
  return (
    <div className="mainall">
      <div>
        <Home />
      </div>
      <div>
        <Routes>
          <Route path="/sales" element={<Saleschannel />} />
          <Route path="/hubs" element={<Hubs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
