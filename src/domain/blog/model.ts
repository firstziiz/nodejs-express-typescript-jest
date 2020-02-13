import { Model } from 'objection'

export class Blog extends Model {
  id!: number
  title!: string

  static tableName = 'blog_blogs'

  static jsonSchema = {
    type: 'object',
    required: ['title'],

    properties: {
      id: { type: 'integer' },
      title: { type: 'string', minLength: 1, maxLength: 255 },
    },
  }
}
