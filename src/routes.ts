import express from 'express'
import { router as blogRouter } from './domain/blog/routes'
import { router as userRouter } from './domain/user/routes'

const router = express.Router()

router.get('/', (req, res) =>
  res.send({
    hello: 'world',
  })
)

router.use('/blog', blogRouter)
router.use('/user', userRouter)

export default router
