import { useEffect, useState } from "react";
import About from "./components/About.jsx";
import Achievements from "./components/Achievements.jsx";
import Contact from "./components/Contact.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Journey from "./components/Journey.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return window.localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Projects />
        <Skills />
        <Journey />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
