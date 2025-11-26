const Bible = require("../models/Bible");


async function getBooks(req, res) {
    try {
        const {version} = req.params;
        console.log(typeOf(version))
        const books = await Bible.getBookList(version)
        if (books) {
            res.status(200).json(books)
        }
    } catch (err) {
        return res.status(500).json({message: "Couldn't get list of books."})
    }
}



module.exports = {
    getBooks
}