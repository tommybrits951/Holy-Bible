import { useState, createContext, useEffect } from "react";
import axios from "../utils/axios";
import { versionList } from "../data/data";

const BibleContext = createContext();

export default function BibleProvider({ children }) {
  const [currentVersion, setCurrentVersion] = useState("AMP");
  const [currentBook, setCurrentBook] = useState({
    book_id: 1,
    book: "Genesis",
  });
  const [currentChapter, setCurrentChapter] = useState(1);
  const [bookList, setBookList] = useState([]);
  const [chapterList, setChapterList] = useState([]);
  const [txt, setTxt] = useState();
  
  // Fetch the list of books for the current version
  useEffect(() => {
    axios
      .get(`/list/book/${currentVersion}`)
      .then((res) => {
        setBookList(res.data);
      })
      .catch((err) => console.log(err));
      
  }, [currentVersion]);

  // Fetch the current chapter list for the current version and book
  useEffect(() => {
    axios
      .get(`/list/chapter/${currentVersion}/${currentBook.book_id}`)
      .then((res) => {
        setChapterList(res.data);
      })
      .catch((err) => console.log(err));
  }, [currentBook, currentVersion ]);

// Fetch the text for the current book and chapter
  useEffect(() => {
    axios.get(`/txt/${currentVersion}/${currentBook.book_id}/${currentChapter}`)
      .then((res) => {
        setTxt(res.data);
      })
      .catch((err) => console.log(err))
  }, [currentBook, currentChapter, currentVersion]);

  return (
    <BibleContext.Provider
      value={{
        versionList,
        currentVersion,
        currentBook,
        currentChapter,
        setCurrentVersion,
        setCurrentBook,
        setCurrentChapter,
        bookList,
        setBookList,
        chapterList,
        setChapterList,
        txt
      }}
    >
      {children}
    </BibleContext.Provider>
  );
}
export { BibleContext };