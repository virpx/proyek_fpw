const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require("cors");
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.listen(port, async () => {
    // try {
    //     await mongoose.connect('mongodb://127.0.0.1:27017/tugas_m7')
    //     console.log('Database connected')
    // }
    // catch (e) {
    //     console.log('Error database connection \n', e)
    // }
    console.log(`Example app listening on port ${port}!`)
})