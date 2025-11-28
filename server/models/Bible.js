const pool = require('../config/DBconfig')

// List of books in a specific version
async function getBooks(version) {
    const books = await pool.query(`select book_id, book from ${version} group by (book_id, book) order by book_id;`)
    return books.rows
}
// List of chapters in a specific book and version
async function getChapterCount(version, book_id) {
    const chapters = await pool.query(`select chapter from ${version} where book_id = ${book_id} group by chapter;`)
    return chapters.rows
}
// Bible text for a specific book, chapter, and version
async function requestTxt(version, book_id, chapter) {
 const response = await pool.query(`select text from ${version} where (book_id, chapter) = (${book_id}, ${chapter}) order by verse;`)
 return response.rows
}


module.exports = {
    getBooks,
    
    getChapterCount,
    requestTxt
}