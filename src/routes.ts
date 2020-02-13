import express from 'express'
import { router as blogRouter } from './domain/blog/routes'

const router = express.Router()

router.get('/', (req, res) =>
  res.send({
    hello: 'world',
  })
)

router.use('/blog', blogRouter)

export default router
