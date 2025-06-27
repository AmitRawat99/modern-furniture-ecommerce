import express from 'express';
import { AddToReview, GetToReviews } from '../Controllers/ReviewsController.js'
const router = express.Router()
import { verifyToken } from '../middleware/verifyToken.js';

router.post(`/add-review/:mainCategory/:subCategory`, verifyToken, AddToReview , )
router.get('/get-review/:mainCategory/:subCategory' , GetToReviews)

export default router