import OrderProduct from "../models/Order.js";

export const OrderProudcts = async (req, res) => {
    try {
        const {
            userId,
            productId,
            productName,
            productQty,
            productAmount,
            shippingAddress,
            email,
            paymentMethod,
            orderStatus,
            orderDate,
            fullName,
            phone,
            alternatePhone,
            address,
            city,
            state,
            postalCode,
            landmark
        } = req.body;

        // Create order with proper field mapping

        const newOrder = await OrderProduct.create({
            userId,
            productId,
            productName,
            email,
            productQty,
            productAmount,
            shippingAddress,
            fullName,
            phone,
            alternatePhone,
            address,
            city,
            state,
            postalCode,
            landmark,
            paymentMethod,
            orderStatus,
            orderDate
        });

        res.status(201).json({
            success: true,
            message: "Order Placed Successfully",
            data: newOrder
        });

    } catch (error) {
        console.log("error", error);
        res.status(400).json({
            success: false,
            message: "Something Went Wrong",
            error: error.message
        });
    }
};

export const getOrderProudcts = async (req, res) => {
    const { userId } = req.params;
    try {

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }


        const findOrders = await OrderProduct.findAll({ where: { userId } })

        if (!findOrders || findOrders.length == 0) {
            res.state(404).json({
                success: false,
                message: "Not Found Order "
            })
        }
        res.status(201).json({
            success: true,
            message: "Find All Order Successfully",
            userOrders: findOrders
        })
    } catch (error) {
        console.log("error", error)
        res.status(201).json({
            success: false,
            message: "Somethink went wrong",
            error: error.message
        })
    }
}


export const getOrders = async (req, res) => {
    try {
        const allProducts = await OrderProduct.findAll()

        if (!allProducts) {
            res.status(404).json({
                success: false,
                message: "Not Found The Products"
            })
        }

        res.status(201).json({
            success: true,
            message: "Find All Product Successfully",
            allOrders: allProducts
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Somethink went wrong",
            error: error.message
        })
    }
}

export const deleteProduct = (req, res) => {
    try {

        const id = req.params.id;
        const deleteOrder = OrderProduct.destroy({ where: { id } })

        if(deleteOrder){
            return res.status(404).json({
                message  : "order not found"
            })
        }

        if (!deleteOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });

    } catch (error) {
        console.log("Somethink Went Wrong", error)
        console.error("Somethink Went Wrong", error)
    }
}