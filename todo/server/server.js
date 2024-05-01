require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDB = require('./config/db.js')
const errorHandler = require('./middleware/errorHandler.js')

connectToDB()

const app = express()

app.use(express.json())
app.use(cors())
app.options('*', cors());
app.use(express.urlencoded({ extended: false }));
app.use('/api/toDo', require('./routes/toDoRoutes.js'))
app.use(errorHandler)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });