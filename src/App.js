import "./App.css";
//Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Navbar
import Navbar from "./components/Navbar.js";
//Header
import Header from "./components/Header";

//React-Particles
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: 30,
            density: {
              value_area: 1000,
              enable: true,
            },
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#f9ab00",
            },
          },
        }}
      />
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
