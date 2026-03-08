import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { motion } from "framer-motion";

function App() {
  return (
    <HashRouter>

      <Navbar />

      <main>
        <motion.div
         initial={{ opacity:0, y:20 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:0.5 }}
        >

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </motion.div>
      </main>

      <Footer />

    </HashRouter>
  );
}

export default App;