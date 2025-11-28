const router = require('express').Router()
const controller = require("../controllers/bibleController")

// Routes for book list and chapter list based on version
router.get("/list/book/:version", controller.books);
router.get("/list/chapter/:version/:book_id", controller.chapterCount);



router.get("/txt/:version/:book_id/:chapter", controller.getTxt)
module.exports = router;