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
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      socketPath: process.env.INSTANCE_UNIX_SOCKET,
    },
    logging: false,
  }
);

export const ClientePedido = sequelize.define(
  "cliente_pedido",
  {
    pedido_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cliente_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observacoes: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
