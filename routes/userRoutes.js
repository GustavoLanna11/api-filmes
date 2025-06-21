import express from 'express';
const userRoutes = express.Router()
import userController from '../controllers/userController.js';

// endpoint para cadastro de um usuário
userRoutes.post("/user", userController.createUser)

export default userRoutes