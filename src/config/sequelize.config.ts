import { SequelizeOptions } from 'sequelize-typescript'
import * as dotenv from 'dotenv'
dotenv.config()

export const SequelizeConfig: SequelizeOptions = {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    models: [__dirname + '/../models/*.entity.{ts,js}']
}