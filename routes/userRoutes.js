import express from 'express';
const userRoutes = express.Router()
import userController from '../controllers/userController.js';

// endpoint para cadastro de um usuário
userRoutes.post("/user", userController.createUser)
// endpoint para login do usuário
userRoutes.post("/auth", userController.LoginUser)

export default userRoutes