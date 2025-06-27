import { sequelize } from "../config/ConnectDb.js";
import { DataTypes } from "sequelize";

const Review = sequelize.define("Review", {
    userId: { type: DataTypes.STRING, require: true },
    Message: { type: DataTypes.STRING },
    userName: { type: DataTypes.STRING },
    mainCategory: { type: DataTypes.STRING },
    subCategory: { type: DataTypes.STRING },
    productId: { type: DataTypes.STRING, ref: "Product", required: true },
    rating: { type: DataTypes.NUMBER, min: 1, max: 5, required: true },
    createdAt: { type: DataTypes.DATE }
}, {
    tableName: "products_review",
    timestamps: true,
})

export default Review;