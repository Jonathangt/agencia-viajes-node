import Sequelize from 'sequelize';
import dotenv from 'dotenv/config'

const DATABASE = process.env.DB_NAME
const USER_DB =  process.env.DB_USER
const PASSWORD_DB = process.env.DB_PASS
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const dialect = process.env.DIALECT

const db = new Sequelize(DATABASE, USER_DB, PASSWORD_DB, {
    host,
    port,
    dialect,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;