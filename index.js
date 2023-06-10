import express from "express"
import router from "./routes/route.js"
import connectWithDB from "./config/connectDB.js"
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

// database
connectWithDB()

// middelware
app.use(express.json())

// load routes
app.use("/api/v1/user",router)

app.listen(PORT,()=>{
    console.log(`Server is running is http://localhost:${PORT}`)
})
