import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Introduction from "./pages/Introduction";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import About from "./pages/About";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/singup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
