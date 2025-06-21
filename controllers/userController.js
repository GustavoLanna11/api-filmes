import userService from "../services/userService.js";
import jwt from "jsonwebtoken";
const JWTSecret = "apifilmes";

// cadastrando um novo usuário
const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await userService.Create(name, email, password);
        res.sendStatus(201);
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
};

export default { createUser }