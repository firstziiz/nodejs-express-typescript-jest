import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Knex from 'knex'
import { Model } from 'objection'
import routes from './routes'

const knexConfig = require('../knexfile')
const app: express.Application = express()

// default middlewares
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

// services
const knex = Knex(knexConfig.development)
Model.knex(knex)

app.use('/', routes)

export default app
