// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import PageNotFound from "./components/Meny/PageNotFound/PageNotFound";
import Menu from "./components/Meny/Menu";
// import Portfolio from "./components/Portfolio/Portfolio";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/menu"></Navigate>}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        {/* <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route> */}
        <Route path="/contacts" element={<Contact></Contact>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      {/* <Menu></Menu> */}
    </>
  );
}
