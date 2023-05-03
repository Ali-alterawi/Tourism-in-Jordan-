import Header from "./componets/Header";
import "./App.css";
import Footer from "./componets/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./componets/Main";
import Tours from "./componets/Tours";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Main />} path="main" />
        <Route element={<Tours />} path="Tours" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
