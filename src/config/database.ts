import {ConnectionOptions} from 'typeorm'
import {User, Image, Result} from '../models'

const config : ConnectionOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST || "localhost",
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "eme22",
  database: process.env.POSTGRES_DB || "waifu",
  entities: [User, Image, Result],
  synchronize: true,
}

export default config