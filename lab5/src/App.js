import "./App.css";
import Main, { Header, Footer } from "./components/Main.js";
import { authContext } from "./contextAPI/context.js";
import { useContext } from "react";
function App() {
  const { lang } = useContext(authContext);

  return (
    <div dir={lang == "eng" ? "ltr" : "rtl"}>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
