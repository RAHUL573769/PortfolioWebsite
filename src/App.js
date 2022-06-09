import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Components/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import HomeName from "./Components/Home/HomeName";

function App() {
  return (
    <div>
      <HomePage></HomePage>

      <Routes>
        <Route path="/" element={<HomeName></HomeName>}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
