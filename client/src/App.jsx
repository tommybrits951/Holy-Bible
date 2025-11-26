import { useState, useEffect, createContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import axios from "./utils/axios";
import Nav from "./components/Nav";

export const BibleContext = createContext();
const languages = ["eng", "spa", "abc", "arb", "grc", "hbo", "heb"];
const versionList = [
  "AMP",
    "ASV",
    "AKJV",
    "BRG",
    "CSB",
    "EHV",
    "ESV",
    "ESVUK",
    "GNV",
    "GW",
    "ISV",
    "JUB",
    "KJV",
    "KJ21",
    "LEB",
    "MEV",
    "NASB",
    "NASB1995",
    "NET",
    "NIV",
    "NIVUK",
    "NKJV",
    "NLT",
    "NLV",
    "NMB",
    "NOG",
    "NRSV",
    "NRSVUE",
    "WEB",
    "YLT"
]
function App() {
  const [currentVersion, setCurrentVersion] = useState("AMP");
  const [book, setBook] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [chapter, setChapter] = useState(1);
  const [chapters, setChapters] = useState([]);

  // Getting book list

  useEffect(() => {
    axios
      .get("/?language=eng")
      .then((res) => {
        console.log(res.data);
        setVerList(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const contextValues = {
    versionList,
    book,
    setBook,
    bookList,
    setBookList,
    chapter,
    setChapter,
    chapters,
    setChapters,
    languages,
  };

  return (
    <main>
      <BibleContext.Provider value={contextValues}>
        <Nav />
        <Routes></Routes>
      </BibleContext.Provider>
    </main>
  );
}

export default App;
