import connection from "./connection.js";
import { Sequelize, DataTypes } from "sequelize";

const JenisBarang = connection.define('JenisBarang', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    jenis: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'jenis_barang'
})

export default JenisBarang