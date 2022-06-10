import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import HomeName from "./Components/Home/HomeName";
import About from "./Components/About";
import Header from "./Components/Home/Header";
import Projects from "./Components/Home/Projects";
import ContactUs from "./Components/Home/ContactUs";
import AboutMe from "./Components/AboutMe";
import Blogs from "./Components/Home/Blogs";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/home" element={<HomePage></HomePage>}></Route>

        <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
