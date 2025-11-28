import {useContext} from 'react'
import { BibleContext } from '../context/BibleContext';
import { Link } from 'react-router'
export default function Nav() {
  const {currentVersion, currentBook, currentChapter} = useContext(BibleContext)
  
  return (
    <nav className='fixed bottom-0 z-10 w-full py-3 bg-stone-600 flex justify-around'>
      <Link to={`/version`} className='text-white underline'>{currentVersion}</Link>
      <Link to={"/book"} className='bg-white py-1 px-3 rounded-lg text-lg'>{currentBook.book}:{currentChapter}</Link>
    </nav>
  )
  
}
