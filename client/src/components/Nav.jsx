import {useContext} from 'react'
import { BibleContext } from '../App'
import { Link } from 'react-router'
export default function Nav() {
    const {lang, book, chapter, bookList} = useContext(BibleContext)


    return (
    <nav className='fixed sm:bottom-0 left-0 w-full sm:h-12 bg-stone-600 flex'>
        <Link to={"/lang"}>{lang}</Link>
        <Link to={"/book"}>{bookList[book]}</Link>   
        <Link to={"/chapter"}>{chapter}</Link>   
    </nav>
  )
}
