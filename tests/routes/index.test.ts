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

  it('should be return 1 when get `/param/1`', async () => {
    const res = await request(app)
      .get('/params/2')
      .send({
        number: 2,
      })
    expect(res.status).toEqual(200)
    expect(res.body).toHaveProperty('number')
  })
})
