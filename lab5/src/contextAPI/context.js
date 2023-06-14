import React, { createContext, useState } from "react";

// 1) Create a new context
const authContext = createContext();
const UseContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [lang, setLang] = useState("eng");
  //-update data in context

  const changeAuth = () => {
    setAuth(!auth);
  };
  const changeLang = () => {
    setLang(lang === "eng" ? "ar" : "eng");
  };
  //2-create provider
  return (
    <authContext.Provider value={{ auth, changeAuth, lang, changeLang }}>
      {children}
    </authContext.Provider>
  );
};

export { UseContextProvider, authContext };
