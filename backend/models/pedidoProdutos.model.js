import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
// const sequelize = new Sequelize(
//   `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
// );
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: false,
    timestamps: false,
  }
);

export const PedidoProdutos = sequelize.define(
  "pedido_produtos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pedido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
