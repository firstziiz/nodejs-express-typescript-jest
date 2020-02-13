import { Model } from 'objection'

export class User extends Model {
  id!: number
  name!: string
  permissions?: Permission[]
  groups?: Group[]

  static tableName = 'user_users'

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  }

  static relationMappings = () => ({
    permissions: {
      relation: Model.ManyToManyRelation,
      modelClass: Permission,
      join: {
        from: 'user_users.id',
        through: {
          from: 'user_users_permissions.userId',
          to: 'user_users_permissions.permissionId',
        },

        to: 'user_permissions.id',
      },
    },
    groups: {
      relation: Model.ManyToManyRelation,
      modelClass: Group,
      join: {
        from: 'user_users.id',
        through: {
          from: 'user_users_groups.userId',
          to: 'user_users_groups.groupId',
        },
        to: 'user_groups.id',
      },
    },
  })
}

export class Permission extends Model {
  id!: number
  name!: string

  static tableName = 'user_permissions'

  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  }
}

export class Group extends Model {
  id!: number
  name!: string
  permissions?: Permission[]

  static tableName = 'user_groups'

  static jsonSchema = {
    type: 'object',
    required: ['name'],

    properties: {
      id: { type: 'integer' },
      name: { type: 'string', minLength: 1, maxLength: 255 },
    },
  }

  static relationMappings = () => ({
    permissions: {
      relation: Model.ManyToManyRelation,
      modelClass: Permission,
      join: {
        from: 'user_groups.id',
        through: {
          from: 'user_groups_permissions.groupId',
          to: 'user_groups_permissions.permissionId',
        },
        to: 'user_permissions.id',
      },
    },
  })
}
