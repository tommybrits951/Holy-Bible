require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()

const PORT = process.env.PORT;


app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
app.use(express.json())




app.use("/", require("./routes/bibleRoutes"))

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})