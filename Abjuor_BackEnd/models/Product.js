import { DataTypes } from 'sequelize';
import { sequelize } from '../config/ConnectDb.js';

const Product = sequelize.define('Product', {
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productImg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subImg1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subImg2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productOldPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rating: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  deliveryInfo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  asideTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  keyFeature: {
    type: DataTypes.JSON, 
    allowNull: false,
  }, 
},{
    tableName : "products",
    timestamps : false
});

export default Product;
