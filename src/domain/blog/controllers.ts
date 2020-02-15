import express from 'express'

import { Blog } from './models'

export const getAllBlogs: express.RequestHandler = async (req, res) => {
  const blogs = await Blog.query()

  res.send({
    blogs,
  })
}
