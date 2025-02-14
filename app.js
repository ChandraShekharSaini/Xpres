import express from 'express'
const app = express();
const PORT = 3300;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import userRoutes from "./routes/user.routes.js"
app.use("/api/user",userRoutes)


app.get("/",(req,res,next)=>{


})



app.listen(PORT, () => {
    console.log("http://localhost:", PORT)
})