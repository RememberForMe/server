require('dotenv').config()

module.exports = {
    development: {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    test: {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
    production: {
        dialect: 'mysql',
        host: process.env.DATABASE_HOST_PRO,
        port: Number(process.env.DATABASE_PORT_PRO),
        username: process.env.DATABASE_USERNAME_PRO,
        password: process.env.DATABASE_PASSWORD_PRO,
        database: process.env.DATABASE_NAME_PRO,
    },
};