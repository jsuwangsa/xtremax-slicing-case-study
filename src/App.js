import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Map />
      </div>
    </div>
  );
}

export default App;
