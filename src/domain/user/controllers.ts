import express from 'express'

import { User, Permission, Group } from './models'

export const getAllUsers: express.RequestHandler = async (req, res) => {
  const users = await User.query()
    .allowGraph(`[permissions, groups]`)
    .withGraphFetched(`[permissions, groups]`)

  res.send({
    users,
  })
}

export const getAllPermission: express.RequestHandler = async (req, res) => {
  const permissions = await Permission.query()

  res.send({
    permissions,
  })
}

export const getAllGroups: express.RequestHandler = async (req, res) => {
  const groups = await Group.query()

  res.send({
    groups,
  })
}
