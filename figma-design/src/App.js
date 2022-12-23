import { Navbar } from "./components/Navbar";
import { Settings } from "./components/Settings";
import { SideBar } from "./components/SideBar";
import "./css/App.css";
function App() {
  return (
    <div>
      <Navbar />
      <div className="databody">
        <SideBar />
        <Settings />
      </div>
    </div>
  );
}

export default App;
