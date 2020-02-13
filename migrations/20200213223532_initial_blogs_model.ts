import Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('blog_blogs', table => {
    table.increments('id').primary()
    table.string('title')
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('blog_blogs')
}
