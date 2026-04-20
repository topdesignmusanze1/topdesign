import { createContext, useState, useEffect } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Initialize from localStorage if available
    return localStorage.getItem("lang") || "kiny";
  });

  // Whenever lang changes, save it
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  function kinHandler() {
    setLang("kiny");
  }

  function engHandler() {
    setLang("eng");
  }

  return (
    <LanguageContext.Provider value={{ lang, kinHandler, engHandler }}>
      {children}
    </LanguageContext.Provider>
  );
}
