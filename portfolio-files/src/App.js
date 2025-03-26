import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import About from "./about/About";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import "./styles/app.css";
import "./styles/fonts.css";
import Background from "./background/Background.js";
import PlayerStats from "./playerStats/PlayerStats.js";
import FontSetter from "./FontSetter";
import withMontserratFont from "./withMontserratFont";

// Компонент для применения шрифта Montserrat Alternates
const FontProvider = ({ children }) => {
  useEffect(() => {
    // Применяем шрифт ко всем элементам через React
    document.documentElement.style.setProperty('font-family', 'Montserrat Alternates, Arial, Helvetica', 'important');

    // Добавляем стили напрямую в head
    const style = document.createElement('style');
    style.textContent = `
      * {
        font-family: 'Montserrat Alternates', Arial, Helvetica !important;
      }
      body, div, p, span, h1, h2, h3, h4, h5, h6, button, input, textarea, select, a {
        font-family: 'Montserrat Alternates', Arial, Helvetica !important;
      }
    `;
    document.head.appendChild(style);

    // Устанавливаем атрибут стиля напрямую для body и всех элементов
    document.body.style.fontFamily = 'Montserrat Alternates, Arial, Helvetica';
    document.querySelectorAll('*').forEach(el => {
      el.style.setProperty('font-family', 'Montserrat Alternates, Arial, Helvetica', 'important');
    });

    return () => {
      // При размонтировании компонента удаляем стиль
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
};

const App = () => {
  const fontStyle = { fontFamily: 'Montserrat Alternates, Arial, Helvetica !important' };

  return (
    <FontProvider>
      <FontSetter />
      <div style={fontStyle}>
        <Router>
          <Nav />
          <Background />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <PlayerStats />
        </Router>
      </div>
    </FontProvider>
  );
};

export default withMontserratFont(App);
