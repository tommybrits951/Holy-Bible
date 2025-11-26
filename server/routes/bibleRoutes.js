const router = require('express').Router()
const controller = require("../controllers/bibleController")


router.get("/:version", controller.getBooks)


module.exports = router;