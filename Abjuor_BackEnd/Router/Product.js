import epxress from 'express'
import { GetAllProduct, AddNewProduct, GetProductCategory, GetProudctId, SeachProduct, DeleteProducts, UpdateProduct } from '../Controllers/ProductController.js'
const router = epxress.Router()

router.post("/add-product", AddNewProduct)
router.get("/all-products", GetAllProduct)
router.get("/all-products/:category", GetProductCategory)
router.get("/all-products/:category/:id", GetProudctId)
router.get("/all-products/search/:category/:id", SeachProduct)
router.delete('/delete-product/:id', DeleteProducts)
router.put('/update-product/:id', UpdateProduct)

export default router