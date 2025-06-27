import Review from "../models/Reviews.js";


export const AddToReview = async (req, res) => {
    try {
        const { Message, productId, rating, userName } = req.body

        const userId = req.user.id.toString();
        const { mainCategory, subCategory } = req.params;

        console.log("Received review for:");
        console.log("Main:", mainCategory, "Sub:", subCategory, "Product ID:", productId);

        if (!productId || !rating) {
            return res.status(400).json({ success: false, message: "productId and rating are required" });
        }

        const newReviews = new Review({
            userId: userId,
            productId,
            Message,
            mainCategory,
            subCategory,
            rating,
            userName
        })

        await newReviews.save()

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            review: newReviews,
        })

    } catch (error) {
        console.log("error", error);
        res.status(500).json({
            message: "Somethink Went Wrong",
            error: error,
        })
    }
}

export const GetToReviews = async (req, res) => {
    try {
        const { productId } = req.query;
        const { mainCategory, subCategory } = req.query;
        console.log(mainCategory, subCategory, 'this is maincategory');

        console.log("Received review for:");
        console.log("Main:", mainCategory, "Sub:", subCategory, "Product ID:", productId);

        if (!productId) {
            return res.status(400).json({
                success: false,
                message: "Product ID is required",
            });
        }

        const productReviews = await Review.findAll({
            where: { productId: productId },
        });

        res.status(200).json({
            message: "Product reviews fetched successfully",
            reviews: productReviews,
        });

    } catch (error) {
        console.log("get product error", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch product reviews",
            error: error,
        });
    }
};
