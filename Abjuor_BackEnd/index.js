import express from 'express';
const app = express();
import dotenv from 'dotenv'
// const port = process.env.PORT || 4500;
const port = 3500
import ConnectDb from './config/ConnectDb.js';
import AuthRouter from './Router/Auth.js'
import ProductRouter from './Router/Product.js';
import ReviewRouter from './Router/Review.js'
import OrderRouter from './Router/Order.js'
import cookie from 'cookie-parser';
import cors from 'cors';
import compression from 'compression';
dotenv.config()
ConnectDb()

// middlewares 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookie())
app.use(compression())


app.use(cors({
    origin: [`http://localhost:5173` , `http://localhost:5174`],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}))



// our router 

app.use('/api/auth', AuthRouter)
app.use('/api/auth', ProductRouter)
app.use('/api/auth', ReviewRouter)
app.use('/api/auth', OrderRouter)

// get router 

app.get("/", (req, res) => {
    res.send("Hey Candidate")
    console.log("Hey Candidate");
})


app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})