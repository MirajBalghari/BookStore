import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import bookrouter from './routers/bookRoute.js';
import userRouter from './routers/userRouter.js';
const app = express();
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());
dotenv.config();

const port = process.env.PORT || 8005 ;
const url = process.env.MONGO_URL ;
 mongoose.connect(url).then(() => {
    console.log('connecting database')
}).catch((err) => {
    console.log(err)
});

app.use('/book',bookrouter)
app.use('/user',userRouter)
app.listen(port,()=>{
    console.log(`server is runnig on port : ${port}`)
})