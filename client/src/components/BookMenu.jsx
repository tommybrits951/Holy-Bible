import {useContext, useEffect, useState} from 'react'
import { BibleContext } from '../context/BibleContext';
import axios from '../utils/axios';
import { Link } from 'react-router';
export default function BookMenu() {
    const {currentBook, bookList, setCurrentBook, currentVersion, setCurrentChapter} = useContext(BibleContext)
    const [chapterList, setChapterList] = useState([])
    const [openMenu, setOpenMenu] = useState(null)
  

function handleChapterClick(e) {
    const chap = e.target.innerText;
    setCurrentChapter(chap)
}    

function handleBookClick(e) {
    const {title} = e.target;
    console.log(bookList[title - 1])
    setCurrentBook(bookList[title - 1])
    setOpenMenu(title);
}

  useEffect(() => {
    axios.get(`/list/chapter/${currentVersion}/${currentBook.book_id}`)
    .then(res => {
        console.log(res.data)
      setChapterList(res.data)
    })
    .catch(err => console.log(err))
  }, [currentBook, currentVersion])
    return (
        <ul className='absolute w-1/2 left-1/4'>
            {bookList.map((book, idx) => {
                return (
                    <li key={idx} className='w-full'>
                        <button className={`bg-stone-200 hover:scale-95 w-full h-full p-2 px-5 my-1 cursor-pointer rounded-2xl border-cyan-200 border-2`} onClick={handleBookClick} title={idx + 1}>{book.book}</button>
                        {openMenu - 1 === idx ? (
                            <div className='grid grid-cols-10 text-center'>
                                {chapterList.map((chap, idc) => {
                                    return <Link key={idx + idc} className='hover:scale-95 bg-stone-300 m-1 rounded-xl border-cyan-300 border-2' onClick={handleChapterClick} to={"/"}>{chap}</Link>
                                })}
                            </div>
                        ) : null }
                    </li>
                )
            })}
        </ul>
    )
}
