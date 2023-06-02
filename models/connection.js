import { Sequelize } from "sequelize";

const connection = new Sequelize('warehouse', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306
})

export default connection