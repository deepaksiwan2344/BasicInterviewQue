
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from "./Components/Home";
import Login from "./Components/Login"
import About from "./Components/About"
import Service from "./Components/Service"
import LudoGame from "./Components/LudoGame"
import Appdevelopment from "./Components/Appdevelopment"
import Andrioddevelopement from "./Components/Andrioddevelopement"
import Fantasycricketapp from "./Components/Fantasycricketapp"
import Leadershipteam from "./Components/Leadershipteam"
import Itblog from "./Components/Itblog"
import Ourportfolio from "./Components/Ourportfolio"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Login" element={<Login />} />
      <Route exact path ="/About" element={<About />} />
      <Route exact path ="/Service" element={<Service />} />
      <Route exact path ="/LudoGame" element={<LudoGame />} />
      <Route exact path ="/Appdevelopment" element={<Appdevelopment />} />
      <Route exact path ="/Andrioddevelopement" element={<Andrioddevelopement />} />
      <Route exact path ="/Fantasycricketapp" element={<Fantasycricketapp />} />
      <Route exact path ="/Leadership_Team" element={<Leadershipteam />} />
      <Route exact path ="/IT_Blog" element={<Itblog />} />
      <Route exact path ="/Our_Portfolio" element={<Ourportfolio />} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
