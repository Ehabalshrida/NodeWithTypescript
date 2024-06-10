import express from "express";
import router from "./routes/post";
const App = express()

// middleware
App.use(express.json())
//routes 
App.use("/api/posts",router)
const PORT:number= 8000

App.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})