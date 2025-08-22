import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
