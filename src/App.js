import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import HomeName from "./Components/Home/HomeName";
import About from "./Components/About";
import Header from "./Components/Home/Header";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

        <Route path="/aboutme" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
