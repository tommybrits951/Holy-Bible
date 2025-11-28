import {useContext} from 'react'
import {BibleContext} from '../context/BibleContext';


export default function PageBtns() {
    const {currentChapter, setCurrentChapter, bookList, setCurrentBook, currentBook, chapterList} = useContext(BibleContext)
    
    function handleNextPage() {
        if (currentChapter === chapterList[-1] && currentBook.book_id !== 66) {
            const book = bookList[parseInt(currentBook.book_id) + 1]
            setCurrentBook(book)
            setCurrentChapter(1)
        } else {
            setCurrentChapter(currentChapter + 1)
        }
    }
    function handlePrevPage() {
        if (currentChapter === 1 && currentBook.book_id !== 1) {
            const book = bookList[parseInt(currentBook.book_id) - 1]
            setCurrentBook(book)
            setCurrentChapter(chapterList.length)
        } else {
            setCurrentChapter(currentChapter - 1)
        }
    }
    return (
    <div className='flex justify-around my-5'>
        <button onClick={handlePrevPage} className='bg-stone-400 px-2 py-1 rounded-lg text-white text-xl hover:scale-95 cursor-pointer'>Prev</button>
        <button onClick={handleNextPage} className='bg-stone-400 px-2 py-1 rounded-lg text-white text-xl hover:scale-95 cursor-pointer'>Next</button>
    </div>
  )
}
