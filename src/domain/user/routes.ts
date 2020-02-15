import express from 'express'
import { getAllUsers, getAllPermission, getAllGroups } from './controllers'

export const router = express.Router()

router.get('/users', getAllUsers)
router.get('/permissions', getAllPermission)
router.get('/groups', getAllGroups)
