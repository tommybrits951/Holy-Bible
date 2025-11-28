const Bible = require("../models/Bible");

async function books(req, res) {
  try {
    const { version } = req.params;
    const books = await Bible.getBooks(version);

    res.json(books);
  } catch (err) {
    return res.status(500).json({ message: "Couldn't get books." });
  }
}

async function chapterCount(req, res) {
  try {
    const { version, book_id } = req.params;
    const results = await Bible.getChapterCount(version, book_id);
    let arr = []
    for (let i = 0; i < results.length; i++) {
      arr.push(results[i].chapter)
    }
    console.log(arr);
    res.json(arr);
  } catch (err) {
    return res.status(500).json({ message: "Couldn't get chapter count." });
  }
}


async function getTxt(req, res) {
  try {
    const {version, book_id, chapter} = req.params;
    const results = await Bible.requestTxt(version, book_id, chapter);
    const texts = results.map((row, idx) => `${idx + 1}. ${row.text}`);
    res.json(texts);
  } catch (err) {
    res.status(500).json({message: err.message || "Problem getting text."})
  }
}

module.exports = {
  books,
  
  chapterCount,
  getTxt
};
