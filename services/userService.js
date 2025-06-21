// importação do model de usuário
import User from "../models/Users.js";

// Classe para manipulação dos dados do usuário
class userService {
    async Create (name, email, password) {
        try{
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
        } catch (error) {
            console.log(error)
        }
    }

    // Retorna dados de um único usuário cadastrado
    async getOne(email) {
        try{
            const user = await User.findOne({ email: email });
            return user;
        } catch(error){
            console.log(error)
        }
    }
}

export default new userService();