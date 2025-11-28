import {useContext} from 'react'
import { BibleContext } from '../context/BibleContext'
import PageBtns from './PageBtns'
export default function Reader() {
    const {txt, currentBook, currentChapter} = useContext(BibleContext)
    
    if (!txt) {
        return (
            <p>Loading...</p>
        )
    }
    return (
        <article className='my-24 px-12'>
            <h2 className='text-6xl text-center'>{currentChapter}</h2>
            <h3 className='text-4xl text-center mb-10'>{currentBook.book}</h3>
            {txt.map((verse, idx) => {
                return (
                    <p key={idx} className='text-lg font-sans'>{verse}</p>
                )
            })}
            <PageBtns />
        </article>
    )
}
