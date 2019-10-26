import * as request from 'supertest'
import app from '../../src/app'

describe('Simple Routes', () => {
  it('should be run', async () => {
    const res = await request(app)
      .get('/')
      .send({
        hello: 'world',
      })
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('hello')
  })
})
