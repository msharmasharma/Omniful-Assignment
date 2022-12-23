import { Navbar } from "./Navbar";
import { Settings } from "./Settings";
import { SideBar } from "./SideBar";
import "../css/App.css";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="databody">
        <SideBar />
        <Settings />
      </div>
    </>
  );
};
