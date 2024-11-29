import express from 'express'
import { userData } from '../controller/userController.js'


export const userRouter=express.Router()

userRouter.post('/user/login',userData)

