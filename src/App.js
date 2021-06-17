import Topbar from "./components/topbar";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./pages/home/Home"
import "./app.css"


function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
          <Sidebar />
          <Home />
      </div>
    </div>
  );
}

export default App;
