import express from 'express'
import { getAllBlogs } from './controllers'

export const router = express.Router()

router.get('/', getAllBlogs)
