import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import Knex from 'knex'
import ExpressSession from 'express-session'
import { Model } from 'objection'
import routes from './routes'

const knexConfig = require('../knexfile')
const app: express.Application = express()

// default middlewares
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(
  cors({
    credentials: true,
    origin: ['localhost:3000'],
  })
)
app.use(morgan('tiny'))
app.disable('x-powered-by')

// services
const knex = Knex(knexConfig.development)
Model.knex(knex)

// session
app.use(
  ExpressSession({
    name: 'express_sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      sameSite: true,
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    },
  })
)

app.use('/', routes)

export default app
