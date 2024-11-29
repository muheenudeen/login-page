import express from 'express'
import { userRouter } from './routes/userRouter.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const PORT = 3000
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
dotenv.config()

app.use('/api', userRouter)




app.listen(PORT, () => {
    console.log("running");
})


main()
async function main() {

    await mongoose.connect(process.env.MONGODB_CONNECTION)
}