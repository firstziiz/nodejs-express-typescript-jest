import * as express from 'express'
import * as helmet from 'helmet'
import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
import routes from './routes'

const app: express.Application = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))
app.disable('x-powered-by')

app.use('/', routes)

export default app
