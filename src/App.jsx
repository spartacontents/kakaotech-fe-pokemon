import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dex" element={<Dex />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
