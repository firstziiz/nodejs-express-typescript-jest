import Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema
    .createTable('user_users', table => {
      table.increments('id').primary()
      table.string('name')
    })
    .createTable('user_groups', table => {
      table.increments('id').primary()
      table.string('name')
    })
    .createTable('user_permissions', table => {
      table.increments('id').primary()
      table.string('name')
    })
    .createTable('user_users_permissions', table => {
      table.increments('id').primary()
      table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user_users')
        .onDelete('CASCADE')
        .index()

      table
        .integer('permissionId')
        .unsigned()
        .references('id')
        .inTable('user_permissions')
        .onDelete('CASCADE')
        .index()
    })
    .createTable('user_users_groups', table => {
      table.increments('id').primary()
      table
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user_users')
        .onDelete('CASCADE')
        .index()

      table
        .integer('groupId')
        .unsigned()
        .references('id')
        .inTable('user_groups')
        .onDelete('CASCADE')
        .index()
    })
    .createTable('user_groups_permissions', table => {
      table.increments('id').primary()
      table
        .integer('groupId')
        .unsigned()
        .references('id')
        .inTable('user_groups')
        .onDelete('CASCADE')
        .index()

      table
        .integer('permissionId')
        .unsigned()
        .references('id')
        .inTable('user_permissions')
        .onDelete('CASCADE')
        .index()
    })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema
    .dropTableIfExists('user_groups_permissions')
    .dropTableIfExists('user_users_groups')
    .dropTableIfExists('user_users_permissions')
    .dropTableIfExists('user_groups')
    .dropTableIfExists('user_permissions')
    .dropTableIfExists('user_users')
}
