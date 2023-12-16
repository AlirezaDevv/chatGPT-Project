import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div className="App flex justify-end min-h-screen">
      <SideBar />
      <Main />
    </div>
  );
}
