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

// Login do usuário + token de autenticação
const LoginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        // email valido
        if(email != undefined){
            const user = await userService.getOne(email);
            // usuario encontrado
            if(user != undefined){
                // senha incorreta
                if(user.password == password){
                    // cria o token e determina e seu tempo de validade
                    jwt.sign(
                        {id: user._id, email: user.email},
                        JWTSecret,
                        {expiresIn: "48h"},
                        (err, token) => {
                            if(err) {
                                res.status(400);
                                res.json({err: "Fala interna"});
                            } else {
                                res.status(200);
                                res.json({token: token})
                            }
                        }
                    );
                    // senha incorreta
                } else {
                    res.status(401);
                    res.json({err: "Credenciais Inválidas!"})
                }
                // Usuário não encontrado
            } else {
                res.status(404);
                res.json({err: "o email enviado não foi encontrado!"})
            }
            // email inválido
        } else {
            res.status(400);
            res.json({err: "o email enviado é inválido!"});
        }
    } catch (error ){
        console.log(error);
        res.sendStatus(500);
    }
};

export default { createUser, LoginUser, JWTSecret };