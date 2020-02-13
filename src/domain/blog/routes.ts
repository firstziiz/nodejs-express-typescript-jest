import express from 'express'
import { getAllBlogs } from './controller'

export const router = express.Router()

router.get('/', getAllBlogs)
