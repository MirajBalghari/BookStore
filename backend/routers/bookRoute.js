import express from 'express'
import { getBook } from "../controllars/bookControllar.js";
const router = express.Router();
router.get('/',getBook) ;

export default router