import { createContext, useState } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("kiny");

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
