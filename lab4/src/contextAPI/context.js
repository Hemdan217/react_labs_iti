import React, { createContext, useState } from "react";

// 1) Create a new context
const authContext = createContext();
const UseContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  //-update data in context

  const changeAuth = () => {
    setAuth(!auth);
  };
  //2-create provider
  return (
    <authContext.Provider value={{ auth, changeAuth }}>
      {children}
    </authContext.Provider>
  );
};

export { UseContextProvider, authContext };
