import { where } from "sequelize";
import Product from "../models/Product.js";
import { deleteProduct } from "./OrderController.js";

export const AddNewProduct = async (req, res) => {
    const { category, productName, productImg, productPrice, productOldPrice, categories, tags, description, asideTitle, keyFeature, rating, deliveryInfo, subImg1, subImg2 } = req.body;

    try {
        const NewProduct = new Product({
            category,
            productName,
            productImg,
            productPrice,
            productOldPrice,
            categories,
            deliveryInfo,
            tags,
            description,
            subImg1,
            subImg2,
            asideTitle,
            rating,
            keyFeature
        })

        await NewProduct.save()

        res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            Product: NewProduct
        })

    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
}

export const GetAllProduct = async (req, res) => {
    try {
        const allProduct = await Product.findAll()
        console.log(allProduct);

        res.status(200).json({
            success: true,
            message: "Your All Products",
            product: allProduct
        })

    } catch (error) {
        console.log("your error", error);

        res.status(500).json({
            success: false,
            message: "SomeThing Went Wrong",
            error: error
        })
    }
}

export const GetProductCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const findProduct = await Product.findAll({ where: { category: category } });

        if (!findProduct || findProduct.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No products found for this category"
            });
        }

        res.status(200).json({
            success: true,
            data: findProduct
        });

    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Product not found",
            error: error.message
        });
    }
};

export const GetProudctId = async (req, res) => {
    const { id } = req.params;
    try {
        const ProductId = await Product.findOne({ where: { id: id } })

        if (!ProductId || ProductId.length == 0) {
            res.status(400).json({
                success: false,
                message: "Product Not Found On This Id",
            })
        }

        if (ProductId) {
            res.status(201).json({
                success: true,
                message: "Find Your Proudct Successfully",
                ProductId: ProductId
            })
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: "SomeThink Went Wrong",
            error: error
        })
    }
}

export const SeachProduct = async (req, res) => {
    try {

        const { category, id } = req.params;
        const SeachProduct = await Product.findAll({ where: { category: category } })


        if (!SeachProduct || SeachProduct.length == 0) {
            res.status(400).json({
                message: "Product not found for this category and ID"
            })
        }

        if (SeachProduct)
            res.status(200).json({
                message: "Find Your Product Successfully",
                Product: SeachProduct
            })


    } catch (error) {
        console.log("search product ", error)
        res.status(500).json({
            message: "SomeThink Went Wrong", error
        })
    }
}

export const DeleteProducts = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.destroy({ where: { id } })

        if (!deleted) {
            res.status(404).json({
                message: "Product not found or already deleted"
            })
        }

        if (deleted) {
            res.status(201).json({
                message: "Product Delete Successfully",
                deleteProduct: deleted
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Somethink went wrong", error,
            error: error.message
        })
    }
}

export const UpdateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body
        const UpdateProduct = Product.update(updateData, { where: { id } })

        if (!UpdateProduct) {
            res.status(404).json({
                message: "Product not found or no changes made."
            })
        }

        if (UpdateProduct) {
            res.status(201).json({
                success: true,
                message: "Product Update Successfully",
                product: UpdateProduct
            })
        }

    } catch (error) {
        res.status(500).json({
            message: "Somethink went wrong", error,
            error: error.message
        })
    }
}