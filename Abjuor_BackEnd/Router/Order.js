import express from 'express';
const router = express.Router()
import { OrderProudcts , getOrderProudcts , getOrders , deleteProduct} from '../Controllers/OrderController.js';

router.post('/order-proudct', OrderProudcts)
router.get('/all-order-proudct/:userId', getOrderProudcts)
router.get('/all-orders' , getOrders)
router.delete('/delete-order/:id' , deleteProduct)

export default router