import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import VersionMenu from "./components/VersionMenu";
import Reader from "./components/Reader";
import BookMenu from "./components/BookMenu";
import BibleProvider from "./context/BibleContext";
function App() {
  return (
    <main>
      <BibleProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Reader />} />
        <Route path="/book" element={<BookMenu />} />
        <Route path="/version" element={<VersionMenu />} />
      </Routes>
      </BibleProvider>
    </main>
  );
}

export default App;

