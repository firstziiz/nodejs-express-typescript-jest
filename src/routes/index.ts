import * as express from 'express'
const router = express.Router()

router.get('/', (req, res) =>
  res.send({
    hello: 'world',
  })
)

router.get('/params/:number', (req, res) =>
  res.send({
    number: req.params.number,
  })
)

export default router
