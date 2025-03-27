import { useEffect } from "react";

// Компонент для принудительного применения шрифта Montserrat
const FontSetter = () => {
  useEffect(() => {
    // Apply font to all elements
    const applyFontToAll = () => {
      const elements = document.querySelectorAll("*");
      elements.forEach((el) => {
        if (
          el.tagName !== "SCRIPT" &&
          el.tagName !== "STYLE" &&
          el.tagName !== "HTML" &&
          el.tagName !== "HEAD"
        ) {
          el.style.setProperty('font-family', 'Montserrat Alternates, Arial, sans-serif', 'important');
        }
      });
    };

    // Apply immediately and then on every content change
    applyFontToAll();

    // Set up observer for DOM changes
    const observer = new MutationObserver(applyFontToAll);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Этот компонент ничего не рендерит
  return null;
};

export default FontSetter;