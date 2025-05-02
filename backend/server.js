import express from "express"
import cors from "cors"
import { connectDb } from "./config/config.js"
import router from "./router/router.js"

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(cors("*"))
app.use(express.json())

app.use("/", router)
connectDb()

app.listen(3169, () => {
    console.log("Qalxdi")
})