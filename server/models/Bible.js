const db = require("../config/DBconfig")


async function getChapter(version, book, chapterNumber) {
    const chapter = await db(version).where({book, chapter: chapterNumber}).select("text")
    return chapter
}

async function getChapterList(version, book) {
    const chapterList = await db(version).where("book", book).select("chapter")
    const results = chapterList.filter((a,b) => b.chapter !== a.chapter )
    return results
}

async function getBookList(version) {
    const list = await db(version).select("book")
    const results = list.filter((a, b) => b.book !== a.book)
    return results
}


module.exports = {
    getChapter,
    getChapterList,
    getBookList
}