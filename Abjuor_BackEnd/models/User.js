import {sequelize}  from '../config/ConnectDb.js'
import { DataTypes} from 'sequelize';

const User = sequelize.define('User', {
  userName: { type: DataTypes.STRING },
  userEmail: { type: DataTypes.STRING },
  userNumber: { type: DataTypes.STRING },
  userPassword: { type: DataTypes.STRING },
},{
    tableName : "User",
    timestamps : false
});

export default User;
