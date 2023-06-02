import connection from "./connection.js";
import { Sequelize, DataTypes, INTEGER } from "sequelize";
const Barang = connection.define('Barang', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jenis_barang: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'barang',
    timestamps: false
})

export default Barang