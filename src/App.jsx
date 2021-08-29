import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss"
function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Home/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
